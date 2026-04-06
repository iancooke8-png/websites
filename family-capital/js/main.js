/* ============================================
   Family Capital — Main JavaScript
   Scroll reveals, nav behaviour, accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
    });

    revealElements.forEach(el => {
        // If element is already in viewport, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            revealObserver.observe(el);
        }
    });


    // --- Nav scroll behaviour ---
    const nav = document.querySelector('.site-nav');
    if (nav) {
        const hasHero = document.querySelector('.hero-media');
        const heroEl = document.querySelector('.hero');
        const heroBottom = heroEl ? heroEl.offsetHeight - 80 : 100;

        const updateNav = () => {
            if (window.scrollY > heroBottom) {
                nav.classList.add('scrolled');
                nav.classList.remove('transparent');
            } else if (hasHero) {
                nav.classList.remove('scrolled');
                nav.classList.add('transparent');
            }
        };
        updateNav();
        window.addEventListener('scroll', updateNav, { passive: true });
    }


    // --- Mobile nav toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }


    // --- Accordion ---
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.parentElement;
            const content = item.querySelector('.accordion-content');
            const isOpen = item.classList.contains('open');

            // Close all others
            document.querySelectorAll('.accordion-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.accordion-content').style.maxHeight = '0';
                }
            });

            // Toggle current
            if (isOpen) {
                item.classList.remove('open');
                content.style.maxHeight = '0';
            } else {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });


    // --- Parallax on hero (subtle, only for image heroes) ---
    const heroMedia = document.querySelector('.hero-media');
    if (heroMedia) {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            if (scroll < window.innerHeight) {
                heroMedia.style.transform = `translateY(${scroll * 0.3}px)`;
            }
        }, { passive: true });
    }


    // --- Reveal grid items ---
    const gridItems = document.querySelectorAll('.cards-grid .card, .team-grid .team-member');
    gridItems.forEach((item) => {
        if (!item.classList.contains('reveal')) {
            item.classList.add('reveal');
        }
        // Check if already in viewport
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add('visible');
        } else {
            revealObserver.observe(item);
        }
    });

});
