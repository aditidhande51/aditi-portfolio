# 🚀 Aditi Sanjay Dhande - Personal Portfolio Website

A modern, high-end, responsive personal portfolio website built for **Aditi Sanjay Dhande** (Electronics & Embedded Systems Developer). Engineered using HTML5, Tailwind CSS, custom modern CSS glassmorphism, and JavaScript.

---

## 🌟 Visual & Technical Highlights
- **Modern Glassmorphism & Dark Mode**: Sleek neon cyan (`#06b6d4`) and electric purple (`#8b5cf6`) accents with dynamic glow animations.
- **Dynamic Typing Engine**: Cycles through Aditi's key titles in the hero header.
- **Floating Theme Switcher**: Instant transition between dark and light themes with `localStorage` persistence.
- **Verified Industry Experience**: Emertxe Embedded Systems Internship, Raymond UCO Denim Industrial Training, MSEDCL 33/11 kV Substation Training, and The Developers Arena Python Internship.
- **Interactive Project & Credential Showcase**: Categorized filter tabs with direct links to the official OneDrive credentials vault.
- **Quick Links Hub**: Dedicated spotlight cards for Google Drive Resume, LinkedIn Profile, and OneDrive Certificates.
- **Contact Form**: Interactive form with feedback notification toast and a one-click "Copy Email" feature.
- **No Unwanted Image Files**: Built with pure vector SVG graphics and FontAwesome 6 icons.

---

## 🚀 How to Deploy on Render (Step-by-Step)

This repository is pre-configured for Render. You can deploy it using either **Method 1 (Web Service via Node.js)** or **Method 2 (Static Site)**.

### Method 1: Deploy as a Web Service (Recommended)
This method uses the included [server.js](server.js) with production caching and automated health checks (`/healthz`).

1. **Push your code to GitHub / GitLab**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Aditi Dhande Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Open Render Dashboard**:
   - Go to [dashboard.render.com](https://dashboard.render.com/) and sign in.
   - Click **"New +"** &rarr; select **"Web Service"** (or select **"Blueprint"** to use the pre-configured [render.yaml](render.yaml)).

3. **Configure Settings**:
   - **Repository**: Connect your GitHub repository.
   - **Name**: `aditi-portfolio` (or your preferred name).
   - **Region**: Oregon (or closest to you).
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

4. **Click "Deploy Web Service"**:
   - Render will build and deploy your app.
   - Once deployed, your site will be live at:
     `https://<your-app-name>.onrender.com`

---

### Method 2: Deploy as a Static Site (Fast & Always Active)
Render also offers 100% free static site hosting with global CDN distribution that never sleeps:

1. On [dashboard.render.com](https://dashboard.render.com/), click **"New +"** &rarr; select **"Static Site"**.
2. Connect your GitHub repository.
3. Configure:
   - **Build Command**: *(Leave empty)*
   - **Publish Directory**: `.`
4. Click **"Create Static Site"**.
5. Your portfolio is live in seconds with zero server overhead!

---

## 💻 Running Locally

### Option A: Using Node.js
```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Direct Browser Opening
Simply double-click [index.html](index.html) to view the website directly in any web browser.

---

## 📁 Repository Structure
```
├── index.html          # Semantic HTML5 page with Tailwind CSS & FontAwesome
├── style.css           # Custom glassmorphism, theme variables & animations
├── script.js           # Typing effect, theme toggle, filters, and form handlers
├── server.js           # Production Node.js server with health checks & static serving
├── package.json        # Dependencies and start scripts for Render
├── render.yaml         # Render Blueprint configuration file
├── .gitignore          # Excluded node_modules and system files
└── README.md           # Documentation and deployment guide
```

---

## 🔗 Official Verification Links
- **LinkedIn Profile**: [https://www.linkedin.com/in/aditi-sanjay-dhande-a030b72b4](https://www.linkedin.com/in/aditi-sanjay-dhande-a030b72b4)
- **Resume (Google Drive)**: [https://drive.google.com/file/d/1k-Jce_Goa0b0zH6jUjUghgaRCdsORqGS/view?usp=drivesdk](https://drive.google.com/file/d/1k-Jce_Goa0b0zH6jUjUghgaRCdsORqGS/view?usp=drivesdk)
- **Achievements & Certificates (OneDrive)**: [https://1drv.ms/f/c/FC98557F8311F506/IgCeYX7GjqeVQJDpuMIyV8cMAb2a3S7Be6Su6cNZRNZz8OM?e=umepfx](https://1drv.ms/f/c/FC98557F8311F506/IgCeYX7GjqeVQJDpuMIyV8cMAb2a3S7Be6Su6cNZRNZz8OM?e=umepfx)
