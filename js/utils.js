/**
 * Utility Functions - Funções auxiliares reutilizáveis
 */

const Utils = {
    /**
     * Debounce uma função para evitar múltiplas chamadas rápidas
     * @param {Function} func - Função a debounce
     * @param {number} wait - Tempo de espera em ms
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle uma função para chamar no máximo a cada `limit` ms
     * @param {Function} func - Função a throttle
     * @param {number} limit - Intervalo mínimo em ms
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Verifica se um elemento está visível na viewport
     * @param {HTMLElement} element - Elemento a verificar
     */
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * Scroll suave para um elemento
     * @param {string} selector - CSS selector do elemento
     * @param {number} offset - Offset em pixels (padrão: 0)
     */
    smoothScroll(selector, offset = 0) {
        const element = document.querySelector(selector);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },

    /**
     * Adiciona uma classe temporariamente
     * @param {HTMLElement} element - Elemento alvo
     * @param {string} className - Nome da classe
     * @param {number} duration - Duração em ms
     */
    addClassTemporarily(element, className, duration) {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
        }, duration);
    },

    /**
     * Formata um número para exibição (ex: 1000 -> 1.000)
     * @param {number} num - Número a formatar
     * @param {string} locale - Locale para formatação (padrão: 'pt-BR')
     */
    formatNumber(num, locale = 'pt-BR') {
        return new Intl.NumberFormat(locale).format(num);
    },

    /**
     * Retorna informações do navegador/dispositivo
     */
    getDeviceInfo() {
        return {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isTablet: /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent),
            isTouchDevice: () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0))
        };
    }
};

// Export para uso global
window.Utils = Utils;
