/* ============================================
   Ronaldo Avansini | Portfolio — Main Script
   Aurora Premium Edition
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Custom Cursor --- */
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    const interactiveEls = 'a, button, input, textarea, [data-tilt], .filter-btn';

    if (cursorDot && cursorRing) {
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            dotX += (mouseX - dotX) * 0.2;
            dotY += (mouseY - dotY) * 0.2;
            ringX += (mouseX - ringX) * 0.1;
            ringY += (mouseY - ringY) * 0.1;

            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        document.addEventListener('mouseover', (e) => {
            const t = e.target.closest(interactiveEls);
            cursorRing.classList.toggle('hovering', !!t);
        });
    }

    /* --- Particles Canvas --- */
    const canvas = document.getElementById('particlesCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId;
        let canvasMouseX = 0, canvasMouseY = 0;

        function resizeCanvas() {
            const hero = canvas.parentElement;
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.hue = Math.random() > 0.5 ? 239 : 187; // indigo or cyan
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Mouse attraction
                const dx = canvasMouseX - this.x;
                const dy = canvasMouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    this.x += dx * 0.002;
                    this.y += dy * 0.002;
                    this.opacity = Math.min(this.opacity + 0.01, 0.6);
                } else {
                    this.opacity = Math.max(this.opacity - 0.005, 0.1);
                }

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                const sat = this.hue === 239 ? '76%' : '82%';
                const light = this.hue === 239 ? '67%' : '47%';
                ctx.fillStyle = `hsla(${this.hue}, ${sat}, ${light}, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Create particles (fewer for perf)
        const particleCount = Math.min(50, Math.floor(canvas.width / 25));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        canvas.parentElement.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            canvasMouseX = e.clientX - rect.left;
            canvasMouseY = e.clientY - rect.top;
        });

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const opacity = (1 - dist / 120) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animId = requestAnimationFrame(animateParticles);
        }

        // Only animate when visible
        const heroSection = document.getElementById('hero');
        const particleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateParticles();
                } else {
                    cancelAnimationFrame(animId);
                }
            });
        }, { threshold: 0.1 });

        if (heroSection) particleObserver.observe(heroSection);
    }

    /* --- Progress Bar --- */
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
        }, { passive: true });
    }

    /* --- Navbar --- */
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        navbar.classList.toggle('scrolled', currentY > 60);

        if (currentY > 120) {
            if (currentY > lastScrollY) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
        } else {
            navbar.classList.remove('nav-hidden');
        }

        lastScrollY = currentY;
    }, { passive: true });

    /* --- Mobile Menu --- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    /* --- Active Nav Link --- */
    const sections = document.querySelectorAll('section[id]');
    const navLinkItems = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        const scrollY = window.scrollY + 160;

        sections.forEach(s => {
            if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
                current = s.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    /* --- Typewriter --- */
    const typedEl = document.getElementById('typedText');
    if (typedEl) {
        const phrases = [
            'Desenvolvedor Full Stack',
            'Front-end & Back-end',
            'Arquitetura de Software',
            'Soluções Digitais'
        ];
        let pi = 0, ci = 0, deleting = false;

        function type() {
            const p = phrases[pi];
            typedEl.textContent = deleting ? p.substring(0, ci - 1) : p.substring(0, ci + 1);
            ci += deleting ? -1 : 1;

            if (!deleting && ci === p.length) {
                setTimeout(() => { deleting = true; type(); }, 2000);
                return;
            }
            if (deleting && ci === 0) {
                deleting = false;
                pi = (pi + 1) % phrases.length;
                setTimeout(type, 300);
                return;
            }
            setTimeout(type, deleting ? 40 : 70);
        }

        type();
    }

    /* --- Tilt Cards --- */
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rx = (y - 0.5) * -12;
            const ry = (x - 0.5) * 12;
            card.style.transform =
                `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
            card.style.transition = 'transform 0.1s ease-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.2,0.8,0.2,1)';
        });
    });

    /* --- Glow Card Effect (cursor-following glow on cards) --- */
    document.querySelectorAll('.service-card, .project-card, .stat-card, .skill-group, .timeline-content').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--glow-x', `${x}px`);
            card.style.setProperty('--glow-y', `${y}px`);
            card.style.background = `
                radial-gradient(250px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 60%),
                rgba(24, 24, 27, 0.5)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = '';
        });
    });

    /* --- Reveal on Scroll --- */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    revealEls.forEach((el, i) => {
        if (el.closest('.skills-grid')) {
            el.style.transitionDelay = `${i * 0.1}s`;
        }
        revealObserver.observe(el);
    });

    /* --- Count Up --- */
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let statsDone = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsDone) {
                statsDone = true;
                statNumbers.forEach(el => {
                    const target = parseInt(el.dataset.target);
                    const suffix = el.dataset.suffix || '';
                    const start = performance.now();
                    function update(now) {
                        const p = Math.min((now - start) / 2000, 1);
                        el.textContent = Math.floor(p * target);
                        if (p < 1) requestAnimationFrame(update);
                        else el.textContent = target + suffix;
                    }
                    requestAnimationFrame(update);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsGrid = document.getElementById('statsGrid');
    if (statsGrid && statNumbers.length) statsObserver.observe(statsGrid);

    /* --- Skill Bar Animation --- */
    const skillBars = document.querySelectorAll('.skill-progress');
    let skillsDone = false;

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsDone) {
                skillsDone = true;
                skillBars.forEach(bar => {
                    const w = bar.dataset.width;
                    if (w) setTimeout(() => bar.style.width = w + '%', 200);
                });

                document.querySelectorAll('.skill-percent').forEach(el => {
                    const t = parseInt(el.dataset.target);
                    if (t) {
                        const start = performance.now();
                        function update(now) {
                            const p = Math.min((now - start) / 1500, 1);
                            el.textContent = Math.floor(p * t) + '%';
                            if (p < 1) requestAnimationFrame(update);
                            else el.textContent = t + '%';
                        }
                        requestAnimationFrame(update);
                    }
                });

                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid && skillBars.length) skillsObserver.observe(skillsGrid);

    /* --- Project Filter --- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length && projectCards.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const f = btn.dataset.filter;
                projectCards.forEach(card => {
                    const cats = (card.dataset.category || '').split(' ');
                    const show = f === 'all' || cats.includes(f);
                    if (show) {
                        card.style.display = '';
                        card.style.opacity = '1';
                        card.style.transform = '';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => { card.style.display = 'none'; }, 300);
                    }
                });
            });
        });
    }

    /* --- Staggered Project Card Entrance --- */
    const projectCardsAll = document.querySelectorAll('.project-card');
    if (projectCardsAll.length) {
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.project-card');
                    cards.forEach((card, i) => {
                        card.style.animationDelay = `${i * 0.15}s`;
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(40px)';
                        requestAnimationFrame(() => {
                            card.style.animation = 'cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                        });
                    });
                    projectObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) projectObserver.observe(projectsGrid);
    }

    /* --- Contact Form --- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.querySelectorAll('.form-input').forEach(i => i.setAttribute('placeholder', ' '));

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit');
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
                btn.style.opacity = '1';
                btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                setTimeout(() => {
                    contactForm.reset();
                    btn.innerHTML = orig;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2500);
            }, 1500);
        });
    }

    /* --- Back to Top --- */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* --- Spotlight --- */
    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        let spotlightVisible = false;

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            spotlight.style.background =
                `radial-gradient(600px at ${x}% ${y}%, rgba(99, 102, 241, 0.04), transparent 60%)`;
            if (!spotlightVisible) {
                spotlight.classList.add('visible');
                spotlightVisible = true;
            }
        });
    }

    /* --- Magnetic Buttons --- */
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            btn.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
            btn.style.transition = 'transform 0.1s ease-out';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
            btn.style.transition = 'transform 0.3s ease-out';
        });
    });

    /* --- Navigation Dots --- */
    const navDots = document.getElementById('navDots');
    const navDotItems = document.querySelectorAll('.nav-dot');

    if (navDots && navDotItems.length) {
        const dotSections = ['hero', 'about', 'skills', 'projects', 'contact'];

        function updateDots() {
            let current = '';
            const scrollY = window.scrollY + 200;

            dotSections.forEach(id => {
                const section = document.getElementById(id);
                if (section && scrollY >= section.offsetTop &&
                    scrollY < section.offsetTop + section.offsetHeight) {
                    current = id;
                }
            });

            navDotItems.forEach(dot => {
                dot.classList.toggle('active', dot.dataset.section === current);
            });
        }

        window.addEventListener('scroll', updateDots, { passive: true });
        updateDots();

        navDotItems.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(dot.dataset.section);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    /* --- Reveal Text Letter by Letter --- */
    const revealTexts = document.querySelectorAll('[data-reveal-text]');
    if (revealTexts.length) {
        const revealTextObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const text = el.textContent.trim();
                    el.textContent = '';
                    const chars = text.split('');
                    chars.forEach((char, i) => {
                        const span = document.createElement('span');
                        span.className = 'reveal-char';
                        span.textContent = char === ' ' ? '\u00A0' : char;
                        span.style.animationDelay = i * 20 + 'ms';
                        el.appendChild(span);
                    });
                    revealTextObserver.unobserve(el);
                }
            });
        }, { threshold: 0.3 });

        revealTexts.forEach(el => revealTextObserver.observe(el));
    }

    /* --- Smooth Scroll --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
