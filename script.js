// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
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

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .about-card').forEach(el => {
    observer.observe(el);
});

// Apply button click handler (placeholder for future form)
document.getElementById('applyBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Replace this URL with your actual form URL later
    alert('Application form coming soon! Please check back later.');
    // When you have the form URL, replace the alert with:
    // window.location.href = 'YOUR_FORM_URL_HERE';
});

// Parallax effect for background elements
window.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.bg-animation span').forEach((span, index) => {
        const speed = (index + 1) * 0.5;
        span.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.hero h1');
heroTitle.style.opacity = '1';