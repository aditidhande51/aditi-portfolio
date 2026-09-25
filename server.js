/**
 * Aditi Sanjay Dhande Portfolio - Production Server
 * Optimized for Render Deployment & Local Development
 */

const path = require('path');
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

try {
  // Primary Express implementation
  const express = require('express');
  const app = express();

  // Health check endpoint for Render monitoring
  app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  // Serve static assets from current directory with caching
  app.use(express.static(__dirname, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        // Don't cache HTML to ensure immediate updates
        res.setHeader('Cache-Control', 'no-cache');
      }
    }
  }));

  // Fallback route for all other requests to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(PORT, HOST, () => {
    console.log(`=======================================================`);
    console.log(`🚀 Aditi Sanjay Dhande Portfolio Server Active!`);
    console.log(`📡 Listening on http://${HOST}:${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'production'}`);
    console.log(`✅ Ready for Render deployment.`);
    console.log(`=======================================================`);
  });

} catch (err) {
  // Zero-dependency fallback using native Node.js HTTP in case express is not installed
  console.warn(`Express not detected, initializing built-in HTTP server fallback...`);
  const http = require('http');
  const fs = require('fs');

  const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.ico': 'image/x-icon'
  };

  const server = http.createServer((req, res) => {
    if (req.url === '/healthz') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'OK' }));
      return;
    }

    let reqPath = req.url === '/' ? '/index.html' : req.url;
    let safePath = path.normalize(path.join(__dirname, reqPath));

    if (!safePath.startsWith(__dirname)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.stat(safePath, (err, stats) => {
      if (err || !stats.isFile()) {
        safePath = path.join(__dirname, 'index.html');
      }

      const ext = path.extname(safePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(safePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(500);
          res.end('Internal Server Error');
          return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      });
    });
  });

  server.listen(PORT, HOST, () => {
    console.log(`🚀 Built-in HTTP server listening on http://${HOST}:${PORT}`);
  });
}
