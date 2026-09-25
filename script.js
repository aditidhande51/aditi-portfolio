/**
 * Aditi Sanjay Dhande - Personal Portfolio
 * Interactive Script: Dynamic Typing, Theme Switcher, Navigation, Filtering, and Form Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTypingEffect();
  initMobileMenu();
  initScrollSpy();
  initFilterTabs();
  initStatsCounters();
  initContactForm();
  initBackToTop();
  initCopyEmail();
});

/* ==========================================================================
   1. Dark / Light Theme Toggle with LocalStorage
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('aditi-portfolio-theme') || 'dark';

  if (savedTheme === 'light') {
    root.classList.add('light');
    if (themeIcon) {
      themeIcon.className = 'fa-solid fa-moon text-indigo-600 text-lg';
    }
  } else {
    root.classList.remove('light');
    if (themeIcon) {
      themeIcon.className = 'fa-solid fa-sun text-yellow-400 text-lg';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      const currentTheme = isLight ? 'light' : 'dark';
      localStorage.setItem('aditi-portfolio-theme', currentTheme);

      if (themeIcon) {
        if (isLight) {
          themeIcon.className = 'fa-solid fa-moon text-indigo-600 text-lg';
          themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        } else {
          themeIcon.className = 'fa-solid fa-sun text-yellow-400 text-lg';
          themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        }
      }
    });
  }
}

/* ==========================================================================
   2. Dynamic Typing Effect for Hero Section
   ========================================================================== */
function initTypingEffect() {
  const textElement = document.getElementById('typed-text');
  if (!textElement) return;

  const phrases = [
    "Hi, I'm Aditi Sanjay Dhande | Electronics & Embedded Systems Developer",
    "PIC16F877A & Embedded C Firmware Specialist",
    "Electrical Engineering Scholar @ GCOE Yavatmal",
    "IoT, Hybrid Solar Grids & Industrial Automation Developer",
    "Passionate Problem Solver & Tech Innovator"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 65;
  const deletingSpeed = 35;
  const pauseEnd = 2200;
  const pauseStart = 500;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Completed phrase
      isDeleting = true;
      setTimeout(type, pauseEnd);
      return;
    } else if (isDeleting && charIndex === 0) {
      // Completed deletion
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, pauseStart);
      return;
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, currentSpeed);
  }

  // Start initial typing
  setTimeout(type, 700);
}

/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIcon) menuIcon.className = 'fa-solid fa-xmark text-xl text-cyan-400';
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
    });
  });
}

/* ==========================================================================
   4. ScrollSpy: Highlight Active Navigation Link
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset + 180;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   5. Filter Tabs for Projects & Credentials
   ========================================================================== */
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterCards = document.querySelectorAll('.filter-card');

  if (!filterBtns.length || !filterCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button styling
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-white', 'border-cyan-400');
        b.classList.add('bg-slate-800/60', 'text-slate-300', 'border-slate-700');
      });

      btn.classList.add('active', 'bg-cyan-500', 'text-white', 'border-cyan-400');
      btn.classList.remove('bg-slate-800/60', 'text-slate-300', 'border-slate-700');

      const filterValue = btn.getAttribute('data-filter');

      filterCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        const categoryList = categories.split(' ');

        if (filterValue === 'all' || categoryList.includes(filterValue)) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   6. Animated Numerical Counters (IntersectionObserver)
   ========================================================================== */
function initStatsCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  if (!counterElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1600;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              el.textContent = `${target}${suffix}`;
              clearInterval(timer);
            } else {
              el.textContent = `${Math.floor(count)}${suffix}`;
            }
          }, stepTime);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-bar');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   7. Contact Form Simulation & Floating Toast
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Sending Message...';

    setTimeout(() => {
      // Simulate successful dispatch
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Message Sent!';

      showToast("Thank you! Your message has been sent. Aditi will respond soon.");

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
      }, 3000);
    }, 1200);
  });

  function showToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 400);
    }, 4500);
  }

  const toastClose = document.getElementById('toast-close');
  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 400);
    });
  }
}

/* ==========================================================================
   8. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   9. Copy Email to Clipboard Feature
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyFeedback = document.getElementById('copy-feedback');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email') || 'aditidhande2003@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      if (copyFeedback) {
        copyFeedback.classList.remove('opacity-0');
        copyFeedback.classList.add('opacity-100');
        setTimeout(() => {
          copyFeedback.classList.remove('opacity-100');
          copyFeedback.classList.add('opacity-0');
        }, 2200);
      }
    });
  });
}
