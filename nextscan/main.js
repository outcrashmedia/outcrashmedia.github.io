/**
 * NextScan Main Script
 * Handles mobile navigation interaction.
 */

(function() {
    'use strict';

    // Mobile navigation toggle
    function initMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Update ARIA attribute
                const isExpanded = navLinks.classList.contains('active');
                navToggle.setAttribute('aria-expanded', isExpanded);
            });
            
            // Close mobile menu when clicking on a link
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();
