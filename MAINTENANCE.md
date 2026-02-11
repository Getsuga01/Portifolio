# Guia de Manutenção & Troubleshooting

## 🔧 Manutenção Comum

### Adicionar Novo Link de Navegação

1. **Adicionar em `index.html`** (na navbar e sidebar):
```html
<!-- Em nav.navbar ul.navbar-nav -->
<li class="nav-item">
    <a class="nav-link" href="#secao">Texto do Link</a>
</li>

<!-- Em sidebar nav.sidebar-nav -->
<a href="#secao" class="sidebar-nav-item">Texto do Link</a>
```

2. **Criar a seção correspondente**:
```html
<section class="light" id="secao">
    <div class="container-lg">
        <div class="section-title">
            <h2>Título da Seção</h2>
            <p>Subtítulo</p>
        </div>
        <!-- Conteúdo -->
    </div>
</section>
```

3. **Atualizar `js/navbar.js`** se necessário:
```javascript
// A classe NavbarManager já pega todas as seções automaticamente
// Nenhuma mudança necessária!
```

---

### Adicionar Novo Card de Serviço

Simplesmente adicione ao HTML da seção Services:

```html
<div class="col-lg-4 col-md-6">
    <div class="service-card">
        <i class="fas fa-icon-name"></i>
        <h3>Título do Serviço</h3>
        <p>Descrição do serviço</p>
    </div>
</div>
```

O CSS e animações já estão implementados!

---

### Mudar Cores Principais

Edite `css/variables.css`:

```css
:root {
    --primary: #ff6b3b;      /* Mude para sua cor */
    --primary-dark: #ff5520;  /* Versão mais escura */
    --accent: #00d4ff;        /* Cor de destaque */
    --success: #00ff88;       /* Cor de sucesso */
}
```

Todas as cores do projeto serão atualizadas automaticamente! ✨

---

### Ajustar Espaçamento

Edite `css/variables.css`:

```css
:root {
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;    /* Ajuste conforme necessário */
    --spacing-xl: 32px;
    --spacing-2xl: 60px;
}
```

Use essas variáveis em vez de valores hardcoded!

---

## 🐛 Troubleshooting

### Problema: Scripts não carregam

**Solução**: Verifique se os caminhos são relativos ao `index.html`:
```html
<!-- ✅ Correto -->
<script src="js/sidebar.js" defer></script>

<!-- ❌ Errado -->
<script src="/js/sidebar.js" defer></script>
```

---

### Problema: CSS não aplica mudanças

**Solução 1**: Limpe o cache do navegador
```
Ctrl + Shift + Delete (Windows)
Cmd + Shift + Delete (Mac)
```

**Solução 2**: Force reload
```
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)
```

**Solução 3**: Verifique a especificidade CSS:
```css
/* Menos específico - pode ser sobrescrito */
.card { color: red; }

/* Mais específico - terá prioridade */
.section .card { color: blue; }
section .light .card { color: green; }
```

---

### Problema: Sidebar não funciona no mobile

**Solução**: Verifique se `sidebar.js` está sendo carregado:
```html
<!-- Deve estar presente no final do HTML -->
<script src="js/sidebar.js" defer></script>
```

Verifique o console do navegador (F12) para erros.

---

### Problema: Animações travadas

**Solução**: Verifique performance:

1. **Reduzir número de animações**:
```css
/* Remova a animação se não necessária */
.element {
    /* animation: fadeInUp 0.8s ease-out; */ /* Comente */
}
```

2. **Usar `transform` em vez de propriedades dispendiosas**:
```css
/* ✅ Bom para performance */
transform: translateY(10px);

/* ❌ Ruim para performance */
margin-top: 10px; /* Causa reflow */
```

---

### Problema: Formulário de contato não envia

**Solução**: `contact.js` mostra apenas um alerta. Para enviar emails:

1. **Configure backend (Node.js/Python)**:
```javascript
// Adicione em contact.js
handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            this.showSuccess();
            this.form.reset();
        }
    })
    .catch(error => console.error('Erro:', error));
}
```

2. **Ou use serviço como Formspree**:
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
    <!-- Campos do formulário -->
</form>
```

---

## 📊 Checklist de Manutenção Regular

### Semanal
- [ ] Verificar console do navegador para erros
- [ ] Testar links internos
- [ ] Verificar responsividade em diferentes telas

### Mensal
- [ ] Atualizar bibliotecas (Bootstrap, FontAwesome)
- [ ] Revisar analytics para comportamento dos usuários
- [ ] Validar HTML com W3C Validator
- [ ] Validar CSS com Jigsaw W3C

### Trimestral
- [ ] Atualizar conteúdo de experiência/projetos
- [ ] Revisar SEO (meta descriptions, keywords)
- [ ] Testar performance com Lighthouse
- [ ] Testar acessibilidade com axe DevTools

### Anualmente
- [ ] Revisar design e consideração de refresh
- [ ] Auditar segurança
- [ ] Backup completo do projeto
- [ ] Documentação atualizada

---

## 📝 Logs & Debugging

### Habilitar Debug Mode

Adicione isso no console (F12):
```javascript
// Ver todas as seções detectadas
console.log(document.querySelectorAll('section'));

// Ver elemento ativo
console.log(document.querySelector('.sidebar-nav-item.active'));

// Verificar variáveis CSS
console.log(getComputedStyle(document.documentElement).getPropertyValue('--primary'));
```

### Breakpoints de Responsividade

Teste no DevTools com estas dimensões:

| Dispositivo | Resolução | Breakpoint |
|---|---|---|
| Mobile S | 320px | < 480px |
| Mobile L | 480px | 480px |
| Tablet | 768px | 768px |
| Desktop S | 1024px | 1024px |
| Desktop L | 1440px | > 1024px |

---

## 🚀 Otimizações Futuras

### Performance
- [ ] Implementar Service Worker para offline
- [ ] Minificar CSS/JS
- [ ] Implementar Web Fonts otimizadas
- [ ] Lazy loading para seções abaixo da fold

### Funcionalidades
- [ ] Integrar CMS (Contentful, Strapi)
- [ ] Adicionar filtros em portfólio/projetos
- [ ] Sistema de comentários
- [ ] Dark mode toggle

### SEO
- [ ] Schema.org microdata
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] robots.txt

### Segurança
- [ ] HTTPS obrigatório
- [ ] CSP headers
- [ ] Rate limiting no formulário
- [ ] CORS configuration

---

## 📞 Suporte & Recursos

| Recurso | Link |
|---------|------|
| Bootstrap Docs | https://getbootstrap.com/docs |
| FontAwesome Icons | https://fontawesome.com/icons |
| MDN Web Docs | https://developer.mozilla.org/ |
| Can I Use | https://caniuse.com/ |
| Web.dev | https://web.dev/ |

---

## 🔄 Versionamento

Ao fazer mudanças grandes, considere versionamento semântico:

```
MAJOR.MINOR.PATCH

1.0.0 - Versão inicial
1.1.0 - Novos recursos (backwards compatible)
1.1.1 - Bug fixes
2.0.0 - Mudanças incompatíveis com versão anterior
```

Documente mudanças em `CHANGELOG.md`:
```
# Changelog

## [1.1.0] - 2024-02-10

### Adicionado
- Nova seção de projetos
- Dark mode toggle

### Corrigido
- Animation em dispositivos mobile

### Removido
- Serviço descontinuado
```

---

**Última atualização**: Fevereiro 2024
