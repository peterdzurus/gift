
// Smooth scrolling for scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const romeSection = document.getElementById('rome');
    
    if (scrollIndicator && romeSection) {
        scrollIndicator.addEventListener('click', function() {
            romeSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Add intersection observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe Rome section elements
    const romeElements = document.querySelectorAll('.rome-heading, .rome-subheading, .gift-card');
    romeElements.forEach(el => observer.observe(el));
    
    // Add click handler for gift card interaction
    const giftCard = document.querySelector('.gift-card');
    if (giftCard) {
        giftCard.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
});

// Handle video loading and fallback
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    if (video) {
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
        });
        
        video.addEventListener('error', function() {
            console.log('Video failed to load');
            // Add fallback background if video fails
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
        });
    }
});
