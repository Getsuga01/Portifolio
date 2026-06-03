/**
 * Animations Module - Gerencia animações de scroll e efeitos
 */

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupCountUpAnimation();
    }

    /**
     * Observador para animar elementos ao entrar no viewport
     */
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = getComputedStyle(entry.target).animation || 'fadeInUp 0.8s ease-out forwards';
                    entry.target.style.animation = animation;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Seleciona elementos para animar
        document.querySelectorAll('section > .container-lg > div, .service-card, .skill-item, .experience-item').forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Animação de contador para números nas estatísticas
     */
    setupCountUpAnimation() {
        const stats = document.querySelectorAll('.stat-number');
        let hasAnimated = false;

        const countUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    stats.forEach(stat => {
                        const value = stat.textContent.replace(/[^0-9]/g, '');
                        const isNumber = !isNaN(value);
                        if (isNumber) {
                            this.countUp(stat, parseInt(value), 2000);
                        }
                    });
                    hasAnimated = true;
                    countUpObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            countUpObserver.observe(statsSection);
        }
    }

    /**
     * Anima números de um valor inicial até um alvo
     * @param {HTMLElement} element - Elemento a animar
     * @param {number} target - Valor alvo
     * @param {number} duration - Duração em ms
     */
    countUp(element, target, duration) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});
