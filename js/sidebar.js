/**
 * Sidebar Module - Gerencia a sidebar e sua interatividade
 */

class SidebarManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.toggle = document.getElementById('sidebarToggle');
        this.navItems = document.querySelectorAll('.sidebar-nav-item');
        this.body = document.body;
        
        if (this.sidebar && this.toggle) {
            this.init();
        }
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Toggle sidebar
        this.toggle.addEventListener('click', () => this.toggleSidebar());

        // Close sidebar on nav item click
        this.navItems.forEach(item => {
            item.addEventListener('click', () => this.closeSidebar());
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('active');
        this.body.classList.toggle('sidebar-open');
    }

    closeSidebar() {
        this.sidebar.classList.remove('active');
        this.body.classList.remove('sidebar-open');
    }

    handleOutsideClick(e) {
        if (!this.sidebar.contains(e.target) && !this.toggle.contains(e.target)) {
            this.closeSidebar();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SidebarManager();
});
