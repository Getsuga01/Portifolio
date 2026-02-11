# 💼 Portfólio Ronaldo Avansini

Portfólio profissional desenvolvido para apresentar projetos, habilidades e experiência como Desenvolvedor Full Stack.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Design e Interface](#-design-e-interface)
- [Responsividade](#-responsividade)
- [Performance e Otimização](#-performance-e-otimização)
- [Como Executar](#-como-executar)
- [Desenvolvimento](#-desenvolvimento)
- [Contato](#-contato)

---

## 🎯 Visão Geral

Portfólio profissional single-page moderno e responsivo, desenvolvido com foco em:
- ✅ **Performance** - Carregamento rápido e otimizado
- ✅ **Responsividade** - Adaptável a todos os dispositivos
- ✅ **Acessibilidade** - Navegação intuitiva e semântica
- ✅ **Design Moderno** - Interface limpa com animações suaves
- ✅ **Código Limpo** - Organizado e bem documentado

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com:
  - Variáveis CSS (Custom Properties)
  - Flexbox e CSS Grid
  - Animações e transições
  - Gradientes e efeitos visuais
  - Media queries para responsividade
- **JavaScript (ES6+)** - Interatividade e funcionalidades:
  - Intersection Observer API
  - Event Listeners otimizados
  - Smooth scrolling
  - Form validation
  - Sidebar dinâmica

### Frameworks e Bibliotecas
- **Bootstrap 5** - Grid system e componentes
- **Font Awesome 6** - Ícones vetoriais
- **Google Fonts (Inter)** - Tipografia moderna
- **jQuery** - Manipulação DOM simplificada

### Ferramentas de Desenvolvimento
- **Git/GitHub** - Controle de versão
- **VS Code** - Editor de código
- **GitHub Pages** - Deploy e hospedagem

---

## 📁 Estrutura do Projeto

```
Portifolio/
│
├── Index.html                 # Página principal (estrutura HTML)
│
├── css/
│   ├── main.css              # Estilos principais organizados
│   └── stylesheet.css        # Customizações e overrides
│
├── js/
│   └── theme.js              # Scripts personalizados
│
├── img/                      # Imagens do portfólio
│   └── profile.jpg           # Foto de perfil
│
├── vendor/                   # Bibliotecas externas
│   ├── bootstrap/            # Bootstrap CSS e JS
│   ├── font-awesome/         # Font Awesome ícones
│   ├── jquery/               # jQuery
│   └── ...                   # Outras dependências
│
└── README.md                 # Documentação do projeto
```

### Organização do CSS

#### **main.css** (Estilos Principais)
```
1. ROOT VARIABLES       - Cores, fontes e variáveis globais
2. RESET & BASE         - Reset CSS e estilos base
3. ANIMATIONS           - Keyframes e animações
4. SIDEBAR              - Menu lateral fixo
5. NAVBAR               - Navegação superior
6. HERO SECTION         - Seção de apresentação
7. STATS SECTION        - Estatísticas
8. GENERAL SECTIONS     - Estilos compartilhados
9. ABOUT SECTION        - Sobre mim
10. SERVICES SECTION    - Serviços oferecidos
11. EXPERIENCE SECTION  - Experiência profissional
12. SKILLS SECTION      - Habilidades técnicas
13. CONTACT SECTION     - Formulário de contato
14. FOOTER              - Rodapé
15. RESPONSIVE DESIGN   - Media queries
```

#### **stylesheet.css** (Customizações)
- Overrides específicos para Skills
- Estilos customizados de Contact
- Configurações de scrollbar

---

## ✨ Funcionalidades

### 📱 Navegação
- **Sidebar Fixa** - Menu lateral sempre visível (desktop)
- **Navbar Responsiva** - Menu superior adaptável
- **Smooth Scroll** - Rolagem suave entre seções
- **Active Section Indicator** - Destaque da seção ativa
- **Mobile Toggle** - Menu hambúrguer em dispositivos móveis

### 🎨 Seções

#### 1. **Hero Section** (Apresentação)
- Nome e título profissional
- Localização
- CTAs (Call-to-Actions)
- Background com gradientes

#### 2. **Stats Section** (Estatísticas)
- Contador animado
- Números dinâmicos
- Grid responsivo

#### 3. **About** (Sobre Mim)
- Resumo profissional
- Formação acadêmica
- Informações de contato
- Foto de perfil

#### 4. **Services** (Serviços)
- Grid de cards
- Ícones Font Awesome
- Efeitos hover
- Descrições detalhadas

#### 5. **Experience** (Experiência)
- Timeline vertical
- Animações de entrada
- Badges de tecnologias
- Hover effects

#### 6. **Skills** (Conhecimentos)
- Barras de progresso animadas
- Gradientes personalizados
- Cards com hover effects
- Porcentagens dinâmicas

#### 7. **Contact** (Contato)
- Formulário estilizado
- Validação de campos
- Design com gradientes
- Botão animado

#### 8. **Footer** (Rodapé)
- Links sociais
- Informações de copyright
- Ícones com hover effects

### 🎭 Animações e Efeitos

- **Fade In/Out** - Entrada suave de elementos
- **Slide In** - Deslizamento lateral
- **Float** - Flutuação contínua
- **Glow** - Brilho pulsante
- **Progress Loading** - Animação de barras
- **Hover Transforms** - Transformações ao passar o mouse
- **Intersection Observer** - Animações ao scroll

---

## 🎨 Design e Interface

### Paleta de Cores
```css
--primary: #ff6b3b        /* Laranja principal */
--primary-dark: #ff5520   /* Laranja escuro */
--accent: #00d4ff         /* Azul acento */
--bg: #1a1a1a            /* Fundo escuro */
--card: #242424          /* Cards */
--text: #ffffff          /* Texto branco */
--text-light: #b0b0b0    /* Texto secundário */
```

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 600, 700, 800
- **Hierarquia**: Títulos (2.2rem - 3.5rem), Texto (0.9rem - 1.1rem)

### Efeitos Visuais
- **Gradientes**: Linear e radial
- **Sombras**: Box-shadow em múltiplas camadas
- **Bordas**: Border-radius suaves
- **Backdrop Filter**: Blur para glassmorphism
- **Transições**: Cubic-bezier personalizados

---

## 📱 Responsividade

### Breakpoints
```css
Desktop Large:  > 1024px
Desktop:        768px - 1024px
Tablet:         480px - 768px
Mobile:         < 480px
```

### Adaptações por Dispositivo

#### **Desktop (> 1024px)**
- Sidebar fixa de 280px
- Grid de 3 colunas (Services)
- Navegação horizontal completa
- Todas as animações ativas

#### **Tablet (768px - 1024px)**
- Sidebar de 250px
- Grid de 2 colunas
- Navbar compacta
- Fontes ajustadas

#### **Mobile (< 768px)**
- Sidebar colapsável (hambúrguer)
- Grid de 1 coluna
- Navbar simplificada
- Elementos empilhados
- Touch-friendly (áreas de toque maiores)

---

## ⚡ Performance e Otimização

### Estratégias Implementadas

1. **Carregamento Otimizado**
   - Defer e async em scripts
   - Lazy loading de imagens
   - Preconnect para fontes externas

2. **CSS Otimizado**
   - Seleções eficientes
   - Variáveis CSS (reduz repetição)
   - Minificação (em produção)

3. **JavaScript Performance**
   - Event delegation
   - Throttling em scroll events
   - RequestAnimationFrame para animações
   - Passive listeners

4. **Imagens**
   - Formatos otimizados
   - Loading lazy
   - Alt text para acessibilidade

5. **Redução de Código**
   - 85% menos linhas após refatoração
   - Código modular e reutilizável
   - Sem duplicações

---

## 🚀 Como Executar

### Opção 1: Diretamente no Navegador
```bash
# Clone o repositório
git clone https://github.com/Getsuga01/Portifolio.git

# Navegue até a pasta
cd Portifolio

# Abra o arquivo Index.html no navegador
```

### Opção 2: Servidor Local (Recomendado)
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique direito em `Index.html`
3. Selecione "Open with Live Server"

---

## 🔧 Desenvolvimento

### Pré-requisitos
- Editor de código (VS Code recomendado)
- Git instalado
- Navegador moderno

### Personalização

#### 1. **Informações Pessoais**
Edite em `Index.html`:
```html
<h1>Seu Nome</h1>
<p>Seu Título</p>
<p class="hero-location">Sua Localização</p>
```

#### 2. **Cores do Tema**
Modifique em `css/main.css`:
```css
:root {
    --primary: #suaCor;
    --accent: #suaCor;
}
```

#### 3. **Conteúdo das Seções**
- About: Linha ~130
- Services: Linha ~188
- Experience: Linha ~238
- Skills: Linha ~304
- Contact: Linha ~388

#### 4. **Links Sociais**
Footer (Linha ~468):
```html
<a href="https://github.com/seuUsuario">...</a>
```

### Boas Práticas Aplicadas
✅ Código semântico (HTML5)
✅ BEM-like naming convention
✅ Mobile-first approach
✅ Progressive enhancement
✅ Separação de responsabilidades
✅ Comentários descritivos
✅ Commits semânticos
✅ Versionamento Git

---

## 📈 Melhorias Futuras

- [ ] Modo escuro/claro (theme switcher)
- [ ] Internacionalização (i18n)
- [ ] Blog integrado
- [ ] Sistema de CMS
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados
- [ ] Analytics integrado
- [ ] SEO avançado

---

## 📝 Changelog

### v2.0.0 (2026-02-11)
- ✨ Refatoração completa do código
- 📁 Criação de `main.css` organizado
- 🧹 Remoção de CSS inline
- 🗑️ Limpeza de arquivos desnecessários
- 📉 Redução de 85% do código
- 🎨 Melhorias visuais nas seções Skills e Contact
- 🐛 Correção de bugs na sidebar
- 📱 Melhorias de responsividade

### v1.0.0 (2026-02-10)
- 🎉 Lançamento inicial do portfólio

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 📧 Contato

**Ronaldo Avansini**
- 📧 Email: contato.ronaldoavansini@outlook.com
- 📱 WhatsApp: (19) 99354-1387
- 📍 Localização: Ribeirão Preto - SP
- 🌐 Portfolio: [Link do GitHub Pages]

---

## 🙏 Agradecimentos

- **Bootstrap** - Framework CSS
- **Font Awesome** - Biblioteca de ícones
- **Google Fonts** - Tipografia Inter
- **VS Code** - Editor de código
- **GitHub** - Hospedagem e versionamento

---

<div align="center">

**Desenvolvido por Ronaldo Avansini**


</div>
