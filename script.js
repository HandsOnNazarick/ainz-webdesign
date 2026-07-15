// AINZ WEB DESIGN — minimal JS

// Navbar scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close menu when link clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });
}

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Apply fade-in to cards and steps
document.querySelectorAll(
    '.service-card, .pricing-card, .example-card, .process-step, .about, .cta-content'
).forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Track CTA clicks (simple analytics placeholder)
document.querySelectorAll('.btn-primary, .btn-cta, a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.textContent.trim().substring(0, 40);
        console.log('[CTA click]', action);
    });
});