/**
 * Contact Form Module - Gerencia o formulário de contato
 */

class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar validação mais robusta se necessário
        this.showSuccess();
        this.form.reset();
    }

    showSuccess() {
        alert('Obrigado pela mensagem! Entraremos em contato em breve.');
        // Alternativa: usar toast notification ou outro sistema de feedback
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormManager();
});
