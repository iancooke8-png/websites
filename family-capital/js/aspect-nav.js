/* ============================================
   Aspect Page Navigation
   Left/right arrows + mobile swipe
   ============================================ */

(function() {
    const page = document.querySelector('[data-aspect]');
    if (!page) return;

    const prevUrl = page.dataset.prev || null;
    const nextUrl = page.dataset.next || null;
    const prevName = page.dataset.prevName || '';
    const nextName = page.dataset.nextName || '';

    // Create arrow elements — just chevrons, no text
    if (prevUrl) {
        const left = document.createElement('a');
        left.href = prevUrl;
        left.className = 'aspect-arrow aspect-arrow-left';
        left.title = prevName;
        left.innerHTML = '‹';
        document.body.appendChild(left);
    }

    if (nextUrl) {
        const right = document.createElement('a');
        right.href = nextUrl;
        right.className = 'aspect-arrow aspect-arrow-right';
        right.title = nextName;
        right.innerHTML = '›';
        document.body.appendChild(right);
    }

    // Mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 80) {
            if (diff > 0 && nextUrl) {
                window.location.href = nextUrl;
            } else if (diff < 0 && prevUrl) {
                window.location.href = prevUrl;
            }
        }
    }, { passive: true });

    // Keyboard arrows
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' && prevUrl) window.location.href = prevUrl;
        if (e.key === 'ArrowRight' && nextUrl) window.location.href = nextUrl;
    });

    // Add CSS
    const style = document.createElement('style');
    style.textContent = `
        .aspect-arrow {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            font-size: 2.5rem;
            font-weight: 200;
            color: #001e42;
            text-decoration: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 1rem 0.6rem;
            line-height: 1;
        }
        .aspect-arrow:hover {
            opacity: 0.6;
        }
        .aspect-arrow-left { left: 0.5rem; }
        .aspect-arrow-right { right: 0.5rem; }
        body:hover .aspect-arrow {
            opacity: 0.15;
        }
        body:hover .aspect-arrow:hover {
            opacity: 0.6;
        }
        @media (max-width: 768px) {
            .aspect-arrow { display: none; }
        }
    `;
    document.head.appendChild(style);
})();
