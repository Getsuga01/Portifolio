/**
 * Diagnóstico de Overflow & Conteúdo Cortado
 * Execute este script no console (F12) para verificar problemas
 */

console.log("🔍 INICIANDO DIAGNÓSTICO...\n");

// 1. Verificar overflow horizontal global
console.log("1️⃣ SCROLL HORIZONTAL:");
if (document.documentElement.scrollWidth > window.innerWidth) {
    console.error(`❌ OVERFLOW DETECTADO!
    - Viewport width: ${window.innerWidth}px
    - Document width: ${document.documentElement.scrollWidth}px
    - Diferença: ${document.documentElement.scrollWidth - window.innerWidth}px`);
} else {
    console.log("✅ Sem overflow horizontal");
}

// 2. Verificar elementos com overflow
console.log("\n2️⃣ ELEMENTOS COM POSSÍVEL CORTE:");
const allElements = document.querySelectorAll('*');
let foundIssues = false;

allElements.forEach(el => {
    const style = window.getComputedStyle(el);
    const overflow = style.overflow;
    const overflowX = style.overflowX;
    const overflowY = style.overflowY;
    
    // Verificar elementos com overflow: hidden que podem estar cortando
    if (overflow === 'hidden' || (overflowX === 'hidden' && overflowY === 'hidden')) {
        if (el.clientHeight > 0 && el.clientWidth > 0) {
            if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) {
                console.warn(`⚠️ ${el.tagName}.${el.className}:
                - Elemento: ${el.className || el.id || el.tagName}
                - Visível (H×W): ${el.clientHeight}×${el.clientWidth}
                - Conteúdo (H×W): ${el.scrollHeight}×${el.scrollWidth}`);
                foundIssues = true;
            }
        }
    }
});

if (!foundIssues) {
    console.log("✅ Nenhum elemento cortando conteúdo");
}

// 3. Verificar sidebar
console.log("\n3️⃣ SIDEBAR:");
const sidebar = document.getElementById('sidebar');
if (sidebar) {
    const sidebarStyle = window.getComputedStyle(sidebar);
    console.log(`- Posição: ${sidebarStyle.position}`);
    console.log(`- Largura: ${sidebar.offsetWidth}px`);
    console.log(`- Altura: ${sidebar.offsetHeight}px`);
    console.log(`- Scroll interno: ${sidebar.scrollHeight > sidebar.clientHeight ? 'Sim' : 'Não'}`);
} else {
    console.warn("⚠️ Sidebar não encontrada");
}

// 4. Verificar navbar
console.log("\n4️⃣ NAVBAR:");
const navbar = document.querySelector('nav.navbar');
if (navbar) {
    const navItems = navbar.querySelectorAll('.nav-link');
    console.log(`- Links visíveis: ${navItems.length}`);
    navItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.width < 10) {
            console.warn(`⚠️ Link ${index + 1} muito pequeno: ${rect.width}px`);
        }
    });
    console.log("✅ Navbar OK");
} else {
    console.warn("⚠️ Navbar não encontrada");
}

// 5. Verificar seções
console.log("\n5️⃣ SEÇÕES:");
const sections = document.querySelectorAll('section');
console.log(`- Total de seções: ${sections.length}`);
sections.forEach((section, index) => {
    const style = window.getComputedStyle(section);
    const overflow = style.overflow;
    const width = section.offsetWidth;
    const content = section.scrollWidth;
    
    console.log(`  Seção ${index + 1} (${section.id || 'sem ID'}):`);
    console.log(`    - Largura: ${width}px`);
    console.log(`    - Conteúdo: ${content}px`);
    console.log(`    - Overflow: ${overflow}`);
    
    if (content > width) {
        console.warn(`    - ⚠️ AVISO: Conteúdo maior que seção!`);
    }
});

// 6. Verificar cards de serviço
console.log("\n6️⃣ CARDS DE SERVIÇO:");
const cards = document.querySelectorAll('.service-card');
console.log(`- Total de cards: ${cards.length}`);
let truncatedCards = 0;
cards.forEach((card, index) => {
    const text = card.querySelector('p');
    if (text && text.scrollHeight > text.clientHeight) {
        console.warn(`⚠️ Card ${index + 1} com texto truncado`);
        truncatedCards++;
    }
});
console.log(truncatedCards === 0 ? "✅ Todos os cards OK" : `⚠️ ${truncatedCards} cards com texto truncado`);

// 7. Resumo final
console.log("\n" + "=".repeat(50));
console.log("📊 RESUMO FINAL:");
console.log("=".repeat(50));
console.log(`
✅ Se tudo estiver GREEN acima, seu site está perfeito!
❌ Se houver warnings (⚠️), há problemas a corrigir
🔴 Se houver erros (❌), há overflow horizontal

Dica: Use Ctrl+Shift+I (DevTools) para visualizar melhor
`);
