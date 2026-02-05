 // INSON QADRI MEDIA PRODUCTION
 // Main JavaScript File
 
 document.addEventListener('DOMContentLoaded', function() {
     
     // Mobile Menu Toggle
     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
     const mobileNav = document.querySelector('.mobile-nav');
     
     if (mobileMenuBtn && mobileNav) {
         mobileMenuBtn.addEventListener('click', function() {
             mobileNav.classList.toggle('active');
             mobileMenuBtn.classList.toggle('active');
         });
     }
     
     // Close mobile menu when clicking on a link
     const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
     mobileNavLinks.forEach(link => {
         link.addEventListener('click', function() {
             mobileNav.classList.remove('active');
             mobileMenuBtn.classList.remove('active');
         });
     });
     
     // Header scroll effect
     const header = document.querySelector('.header');
     let lastScroll = 0;
     
     window.addEventListener('scroll', function() {
         const currentScroll = window.pageYOffset;
         
         if (currentScroll > 100) {
             header.style.boxShadow = 'var(--shadow-md)';
         } else {
             header.style.boxShadow = 'none';
         }
         
         lastScroll = currentScroll;
     });
     
     // Smooth scroll for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
             e.preventDefault();
             const target = document.querySelector(this.getAttribute('href'));
             if (target) {
                 target.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                 });
             }
         });
     });
     
     // Intersection Observer for animations
     const observerOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.1
     };
     
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('animate-in');
                 observer.unobserve(entry.target);
             }
         });
     }, observerOptions);
     
     // Observe all sections and cards for animation
     document.querySelectorAll('.section, .mission-card, .direction-card, .capability, .process-step, .stat').forEach(el => {
         el.classList.add('animate-ready');
         observer.observe(el);
     });
     
     // Form validation (for contact page)
     const contactForm = document.querySelector('.contact-form');
     if (contactForm) {
         contactForm.addEventListener('submit', function(e) {
             e.preventDefault();
             
             const formData = new FormData(this);
             const data = Object.fromEntries(formData);
             
             // Basic validation
             let isValid = true;
             const requiredFields = this.querySelectorAll('[required]');
             
             requiredFields.forEach(field => {
                 if (!field.value.trim()) {
                     isValid = false;
                     field.classList.add('error');
                 } else {
                     field.classList.remove('error');
                 }
             });
             
             if (isValid) {
                 // Show success message
                 alert('Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.');
                 this.reset();
             }
         });
     }
 });
 
 // Add CSS for animations
 const style = document.createElement('style');
 style.textContent = `
     .animate-ready {
         opacity: 0;
         transform: translateY(20px);
         transition: opacity 0.6s ease, transform 0.6s ease;
     }
     
     .animate-in {
         opacity: 1;
         transform: translateY(0);
     }
     
     .mobile-menu-btn.active span:nth-child(1) {
         transform: rotate(45deg) translate(5px, 5px);
     }
     
     .mobile-menu-btn.active span:nth-child(2) {
         opacity: 0;
     }
     
     .mobile-menu-btn.active span:nth-child(3) {
         transform: rotate(-45deg) translate(5px, -5px);
     }
     
     .form-group input.error,
     .form-group textarea.error,
     .form-group select.error {
         border-color: var(--color-accent);
     }
 `;
 document.head.appendChild(style);