/* ============================================
   Component Loader
   Loads shared nav and footer from /components/
   ============================================ */

(function() {
    // Work out the base path — are we in /pages/ or at root?
    const isInPages = window.location.pathname.includes('/pages/');
    const base = isInPages ? '..' : '.';

    // Load a component into a placeholder element
    function loadComponent(id, file) {
        const el = document.getElementById(id);
        if (!el) return;

        fetch(base + '/components/' + file)
            .then(r => r.text())
            .then(html => {
                // Replace {BASE} with the correct relative path
                html = html.replace(/\{BASE\}/g, base);
                el.innerHTML = html;

                // After nav loads, set up mobile toggle and scroll behaviour
                if (id === 'nav-placeholder') {
                    setupNav();
                }
            })
            .catch(err => console.warn('Component load failed:', file, err));
    }

    function setupNav() {
        const nav = document.querySelector('.site-nav');
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (!nav) return;

        // Nav scroll behaviour
        const hasHeroMedia = document.querySelector('.hero-media');
        const updateNav = () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
                nav.classList.remove('transparent');
            } else if (hasHeroMedia) {
                nav.classList.remove('scrolled');
                nav.classList.add('transparent');
            }
        };

        // Inner pages start scrolled
        if (!hasHeroMedia) {
            nav.classList.add('scrolled');
            nav.classList.remove('transparent');
        }

        updateNav();
        window.addEventListener('scroll', updateNav, { passive: true });

        // Mobile toggle
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('open');
                navLinks.classList.toggle('open');
                document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('open');
                    navLinks.classList.remove('open');
                    document.body.style.overflow = '';
                });
            });
        }

        // Highlight active page
        const currentPath = window.location.pathname;
        navLinks.querySelectorAll('a').forEach(link => {
            if (currentPath.endsWith(link.getAttribute('href').replace(base, '').replace(/^\//, ''))) {
                link.classList.add('active');
            }
        });
    }

    // Load components
    loadComponent('nav-placeholder', 'nav.html');
    loadComponent('footer-placeholder', 'footer.html');
})();
