# Guia de Desenvolvimento - Padrões & Convenções

Este documento descreve os padrões de codificação e convenções usadas neste projeto.

---

## 🎨 CSS - Convenções de Nomenclatura (BEM)

Usamos **BEM (Block Element Modifier)** para nomenclatura de classes CSS:

```css
/* Block - Componente principal */
.sidebar { }

/* Element - Parte do componente */
.sidebar__header { }
.sidebar__nav { }

/* Modifier - Variação ou estado */
.sidebar--active { }
.sidebar__nav-item--active { }
```

### Exemplos no Projeto:

```css
/* ✅ Bom */
.service-card { }
.service-card__icon { }
.service-card:hover { }

/* ❌ Evitar */
.serviceCard { }          /* camelCase */
.service_card { }         /* snake_case */
.service-card-icon { }    /* Difícil de ler */
.s-c { }                  /* Abreviações crípticas */
```

---

## 📝 JavaScript - Padrões & Boas Práticas

### 1. **Nomenclatura de Classes**

Classes usam **PascalCase**:
```javascript
✅ class SidebarManager { }
✅ class NavbarManager { }
✅ class AnimationManager { }

❌ class sidebarManager { }
❌ class sidebar_manager { }
```

### 2. **Nomenclatura de Métodos e Funções**

Métodos usam **camelCase**:
```javascript
✅ toggleSidebar() { }
✅ updateActiveNav() { }
✅ handleOutsideClick() { }

❌ Toggle_Sidebar() { }
❌ update-active-nav() { }
```

### 3. **Métodos Prefixados com Ação**

Prefixos indicam claramente a ação:
```javascript
// Get/Fetch
getData()
getElementInfo()

// Handle/Process
handleClick(e)
handleSubmit(e)

// Set/Update
setValue()
updateActiveNav()

// Create/Add
createCard()
addEventListener()

// Check/Validate
isElementInViewport()
validateForm()
```

### 4. **Encapsulamento com Classes**

Sempre use classes para organizar lógica relacionada:

```javascript
✅ BOAS PRÁTICAS:

class SidebarManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.init();
    }
    
    init() {
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        // Lógica encapsulada
    }
}

❌ EVITAR - Código global solto:

function toggleSidebar() { }
function closeSidebar() { }
window.sidebarOpen = false; // Variável global
```

### 5. **Inicialização com DOM Ready**

Sempre aguarde o DOM estar pronto:

```javascript
✅ CORRETO:
document.addEventListener('DOMContentLoaded', () => {
    new SidebarManager();
});

❌ ERRADO - Pode executar antes do DOM estar pronto:
new SidebarManager();
```

### 6. **Tratamento de Erros Defensivos**

Sempre verifique existência de elementos:

```javascript
✅ DEFENSIVO:
const element = document.getElementById('id');
if (element) {
    element.addEventListener('click', handler);
}

❌ PODE QUEBRAR:
document.getElementById('id').addEventListener('click', handler);
// Se elemento não existir → erro!
```

### 7. **Comentários Descritivos**

Use JSDoc para documentar:

```javascript
✅ BEM DOCUMENTADO:

/**
 * Anima números de um valor inicial até um alvo
 * @param {HTMLElement} element - Elemento a animar
 * @param {number} target - Valor alvo
 * @param {number} duration - Duração em ms
 */
countUp(element, target, duration) {
    // Implementação
}

❌ VAGO:
// anima numero
function countUp(el, val, time) { }
```

---

## 🎯 HTML - Convenções

### 1. **Atributos Sempre em Aspas Duplas**

```html
✅ <div class="container">
✅ <img src="path/to/image.jpg" alt="Description">

❌ <div class='container'>
❌ <img src=path alt=Description>
```

### 2. **Atributos em Ordem Recomendada**

```html
<tag 
  id="unique-id"
  class="class-name"
  data-attribute="value"
  aria-label="Accessible label"
  href="link"
  target="_blank"
  rel="noopener noreferrer"
>
```

### 3. **IDs para JavaScript, Classes para CSS**

```html
✅ <button id="sidebarToggle" class="btn-toggle">
   <!-- JavaScript: document.getElementById('sidebarToggle') -->
   <!-- CSS: .btn-toggle { } -->

❌ <button class="sidebar-toggle-btn">
   <!-- Confunde responsabilidades -->
```

### 4. **Seções Semânticas**

```html
✅ SEMÂNTICO:
<section id="servicos">
    <h2>Serviços</h2>
    <article class="service-card">
        <!-- Conteúdo -->
    </article>
</section>

❌ NÃO SEMÂNTICO:
<div id="servicos">
    <h2>Serviços</h2>
    <div class="service-card">
        <!-- Conteúdo -->
    </div>
</div>
```

---

## 📐 Estrutura de Pastas - Escalabilidade

Para projetos maiores, considere esta estrutura:

```
src/
├── index.html
├── assets/
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css
│   │   │   ├── reset.css
│   │   │   └── typography.css
│   │   ├── components/
│   │   │   ├── sidebar.css
│   │   │   ├── navbar.css
│   │   │   └── cards.css
│   │   ├── layouts/
│   │   │   └── responsive.css
│   │   └── utils/
│   │       └── animations.css
│   ├── js/
│   │   ├── core/
│   │   │   └── utils.js
│   │   ├── modules/
│   │   │   ├── sidebar.js
│   │   │   ├── navbar.js
│   │   │   └── animations.js
│   │   ├── handlers/
│   │   │   └── contact.js
│   │   └── main.js
│   ├── images/
│   └── fonts/
├── tests/
│   ├── unit/
│   │   └── sidebar.test.js
│   └── integration/
│       └── form.test.js
├── docs/
│   ├── architecture.md
│   └── contributing.md
├── .env.example
├── webpack.config.js
└── package.json
```

---

## 🔍 Checklist de Qualidade

Antes de commitar código, verifique:

### HTML
- [ ] Elementos semânticos usados corretamente
- [ ] Alt text em todas as imagens
- [ ] IDs únicos no documento
- [ ] aria-labels em botões sem texto visível
- [ ] Links com `rel="noopener noreferrer"`

### CSS
- [ ] Usar variáveis CSS para cores
- [ ] Sem código duplicado (DRY)
- [ ] Mobile-first approach
- [ ] Sem `!important` desnecessários
- [ ] Classes seguem BEM

### JavaScript
- [ ] Sem console.log em produção
- [ ] Sem variáveis globais desnecessárias
- [ ] Métodos descritivos e testáveis
- [ ] Tratamento de erros implementado
- [ ] Documentação com JSDoc

---

## 🧪 Testes

Exemplo de teste unitário com Jest:

```javascript
// __tests__/utils.test.js
import Utils from '../js/utils.js';

describe('Utils', () => {
    test('debounce deve esperar antes de executar', (done) => {
        const mock = jest.fn();
        const debounced = Utils.debounce(mock, 100);
        
        debounced();
        debounced();
        debounced();
        
        expect(mock).not.toHaveBeenCalled();
        
        setTimeout(() => {
            expect(mock).toHaveBeenCalledTimes(1);
            done();
        }, 150);
    });
});
```

---

## 🚀 Performance

### Dicas de Otimização:

1. **Lazy Loading de Imagens**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Defer em Scripts Externos**
   ```html
   <script src="vendor/jquery.js" defer></script>
   ```

3. **Preconnect para Domínios Externos**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   ```

4. **CSS Crítico Inline**
   ```html
   <style>
       /* CSS crítico para above-the-fold */
   </style>
   <link rel="stylesheet" href="styles.css">
   ```

---

## 📚 Referências & Recursos

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [BEM Methodology](http://getbem.com/)
- [MDN - Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Última atualização**: Fevereiro 2024
