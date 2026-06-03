/**
 * Sidebar Module - Gerencia a sidebar com hover (desktop) e toggle (mobile)
 */

class SidebarManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.trigger = document.getElementById('sidebarTrigger');
        this.toggle = document.getElementById('sidebarToggle');
        this.isHovering = false;
        this.hideTimeout = null;
        this.isMobile = window.innerWidth <= 991;
        
        if (this.sidebar) {
            this.init();
        }
    }

    init() {
        this.attachEventListeners();
        this.handleResize();
    }

    attachEventListeners() {
        // Desktop: Hover behavior
        if (this.trigger) {
            this.trigger.addEventListener('mouseenter', () => {
                if (!this.isMobile) this.showSidebar();
            });
        }

        this.sidebar.addEventListener('mouseenter', () => {
            if (!this.isMobile) {
                this.isHovering = true;
                this.showSidebar();
            }
        });

        this.sidebar.addEventListener('mouseleave', () => {
            if (!this.isMobile) {
                this.isHovering = false;
                this.hideSidebar();
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isMobile) this.handleMouseMove(e);
        });

        // Mobile: Toggle button
        if (this.toggle) {
            this.toggle.addEventListener('click', () => {
                if (this.isMobile) this.toggleSidebar();
            });
        }

        // Click outside to close (mobile)
        document.addEventListener('click', (e) => {
            if (this.isMobile && this.sidebar.classList.contains('visible')) {
                if (!this.sidebar.contains(e.target) && !this.toggle?.contains(e.target)) {
                    this.sidebar.classList.remove('visible');
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        this.isMobile = window.innerWidth <= 991;
        if (!this.isMobile && this.sidebar.classList.contains('visible')) {
            // Remove visible class when switching to desktop
            this.sidebar.classList.remove('visible');
        }
    }

    handleMouseMove(e) {
        // Se o mouse estiver nos primeiros 30px da esquerda, mostrar sidebar
        if (e.clientX <= 30 && !this.isHovering) {
            this.showSidebar();
        }
    }

    showSidebar() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        this.sidebar.classList.add('visible');
    }

    hideSidebar() {
        // Adicionar pequeno delay antes de esconder
        this.hideTimeout = setTimeout(() => {
            this.sidebar.classList.remove('visible');
        }, 300);
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('visible');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SidebarManager();
});
