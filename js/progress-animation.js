// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Only animate if the element is in viewport
    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const rectTop = rect.top;
        const rectBottom = rect.bottom;
        
        return (
            rectTop <= windowHeight && 
            rectBottom >= 0
        );
    };

    progressBars.forEach(bar => {
        if (isInViewport(bar)) {
            // Get the target width from data attribute
            const targetWidth = bar.dataset.width;
            
            // If not animated yet, animate from 0% to target width
            if (!bar.dataset.animated) {
                // Set initial width to 0%
                bar.style.width = '0%';
                
                // Remove any existing transition
                bar.style.transition = '';
                
                // Force a reflow
                void bar.offsetWidth;
                
                // Add transition and animate
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = targetWidth;
                
                // Mark as animated
                bar.dataset.animated = 'true';
            }
        }
    });
}

// Initial check
window.addEventListener('load', animateProgressBars);

// Check on scroll
window.addEventListener('scroll', () => {
    animateProgressBars();
});

// Check on resize
window.addEventListener('resize', () => {
    animateProgressBars();
});
