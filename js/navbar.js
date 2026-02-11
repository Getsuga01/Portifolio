/**
 * Navbar Module - Gerencia a navbar e indicador de seção ativa
 */

class NavbarManager {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.navItems = document.querySelectorAll('.sidebar-nav-item');
        this.ticking = false;
        
        if (this.sections.length > 0) {
            this.init();
        }
    }

    init() {
        this.attachScrollListener();
        this.attachNavLinks();
    }

    attachScrollListener() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.updateActiveNav();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        }, { passive: true });
    }

    updateActiveNav() {
        let current = '';
        
        this.sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href').includes(current));
        });
    }

    attachNavLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleNavLinkClick(e));
        });
    }

    handleNavLinkClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NavbarManager();
});
