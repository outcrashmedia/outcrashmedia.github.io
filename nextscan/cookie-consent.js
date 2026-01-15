// GDPR-compliant Cookie Consent Management

(function() {
    'use strict';
    
    const CONSENT_KEY = 'nextscan_cookie_consent';
    const CONSENT_VERSION = '1.0';
    
    // Check if consent has already been given
    function hasConsent() {
        try {
            const consent = localStorage.getItem(CONSENT_KEY);
            if (consent) {
                const data = JSON.parse(consent);
                return data.version === CONSENT_VERSION && data.accepted === true;
            }
        } catch (e) {
            console.error('Error reading consent:', e);
        }
        return false;
    }
    
    // Save consent decision
    function saveConsent(accepted) {
        try {
            const consentData = {
                accepted: accepted,
                version: CONSENT_VERSION,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
        } catch (e) {
            console.error('Error saving consent:', e);
        }
    }
    
    // Create and show cookie consent banner
    function showConsentBanner() {
        // Check if banner already exists
        if (document.querySelector('.cookie-consent')) {
            return;
        }
        
        const banner = document.createElement('div');
        banner.className = 'cookie-consent show';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie Einwilligung');
        
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <p>
                    Diese Website verwendet nur technisch notwendige Cookies für die Grundfunktionalität. 
                    Wir verwenden keine Tracking- oder Analyse-Cookies. 
                    <a href="privacy.html" style="color: #dbeafe; text-decoration: underline;">Mehr erfahren</a>
                </p>
                <div class="cookie-consent-actions">
                    <button class="btn btn-primary" id="cookie-accept">Akzeptieren</button>
                    <button class="btn btn-secondary" id="cookie-decline" style="background: transparent; border-color: rgba(255,255,255,0.3); color: white;">Ablehnen</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Add event listeners
        document.getElementById('cookie-accept').addEventListener('click', function() {
            saveConsent(true);
            hideBanner();
        });
        
        document.getElementById('cookie-decline').addEventListener('click', function() {
            saveConsent(false);
            hideBanner();
        });
    }
    
    // Hide the consent banner
    function hideBanner() {
        const banner = document.querySelector('.cookie-consent');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }
    
    // Initialize on page load
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                if (!hasConsent()) {
                    // Show banner after a short delay for better UX
                    setTimeout(showConsentBanner, 500);
                }
            });
        } else {
            if (!hasConsent()) {
                setTimeout(showConsentBanner, 500);
            }
        }
    }
    
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
    
    // Initialize everything
    init();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
    
})();
