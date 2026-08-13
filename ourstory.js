// =========================================================
// GHOSH DHARA - OUR STORY SPECIFIC SCRIPTS
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. STICKY HEADER LOGIC
    // When the user scrolls down, add the 'scrolled' class to the header for the ivory blur effect
    const header = document.getElementById('mainHeader');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. SCROLL REVEAL ANIMATIONS
    // Uses Intersection Observer to fade in elements as they enter the screen
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it enters the absolute bottom
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

});



document.addEventListener('DOMContentLoaded', () => {
            const storyMenuBtn = document.getElementById('mobileMenuBtn');
            const storyNavDrawer = document.getElementById('mobileNavDrawer');
            const storyNavOverlay = document.getElementById('mobileNavOverlay');
            const storyCloseNav = document.getElementById('closeMobileNav');

            if (storyMenuBtn && storyNavDrawer) {
                // Open Menu
                storyMenuBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    storyNavDrawer.classList.add('active');
                    storyNavOverlay.classList.add('active');
                    document.body.classList.add('no-scroll');
                });

                // Close Menu via 'X'
                if (storyCloseNav) {
                    storyCloseNav.addEventListener('click', () => {
                        storyNavDrawer.classList.remove('active');
                        storyNavOverlay.classList.remove('active');
                        document.body.classList.remove('no-scroll');
                    });
                }

                // Close Menu via Overlay tap
                if (storyNavOverlay) {
                    storyNavOverlay.addEventListener('click', () => {
                        storyNavDrawer.classList.remove('active');
                        storyNavOverlay.classList.remove('active');
                        document.body.classList.remove('no-scroll');
                    });
                }
            }
        });
