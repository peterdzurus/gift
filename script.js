
// Enhanced smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const romeSection = document.getElementById('rome');
    
    if (scrollIndicator && romeSection) {
        scrollIndicator.addEventListener('click', function() {
            romeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Enhanced intersection observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.animate-on-scroll');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 200);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.rome-heading, .rome-subheading, .gift-card, .floating-element');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Enhanced gift card interaction
    const giftCard = document.querySelector('.surprise');
    if (giftCard) {
        giftCard.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
            
            // Create sparkle effect
            createSparkleEffect(this);
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover effect for gift card
        giftCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        giftCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Enhanced floating elements interaction
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform += ' scale(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = this.style.transform.replace(' scale(1.1)', '');
        });
        
        element.addEventListener('click', function() {
            // Create ripple effect
            createRippleEffect(this);
        });
    });
    
    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform += ` translateY(${yPos}px)`;
        });
    });
    
    // Enhanced video handling with loading animation
    const video = document.querySelector('.hero-video');
    if (video) {
        video.addEventListener('loadstart', function() {
            console.log('Video loading started');
        });
        
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
            this.style.opacity = '1';
            
            // Add entrance animation for video
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.transition = 'transform 2s ease-out';
            }, 100);
        });
        
        video.addEventListener('error', function() {
            console.log('Video failed to load');
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                heroSection.style.backgroundSize = '400% 400%';
                heroSection.style.animation = 'gradientShift 15s ease infinite';
            }
        });
    }
    
    // Add entrance animations with delays
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' && window.pageYOffset < 100) {
            romeSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (e.key === 'ArrowUp' && window.pageYOffset > 100) {
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Create sparkle effect function
function createSparkleEffect(element) {
    const sparkles = 12;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < sparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-particle';
        sparkle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #fbbf24, #f59e0b);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
        `;
        
        document.body.appendChild(sparkle);
        
        const angle = (i / sparkles) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        const duration = 800 + Math.random() * 400;
        
        sparkle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => sparkle.remove();
    }
}

// Create ripple effect function
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        left: 50%;
        top: 50%;
        width: ${size}px;
        height: ${size}px;
        margin-left: ${-size / 2}px;
        margin-top: ${-size / 2}px;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add CSS for dynamic effects
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    .loaded .hero-content {
        animation: none;
    }
`;
document.head.appendChild(style);
