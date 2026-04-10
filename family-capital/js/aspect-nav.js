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

    // Create arrow elements
    if (prevUrl) {
        const left = document.createElement('a');
        left.href = prevUrl;
        left.className = 'aspect-arrow aspect-arrow-left';
        left.innerHTML = '<span class="aspect-arrow-icon">‹</span><span class="aspect-arrow-label">' + prevName + '</span>';
        document.body.appendChild(left);
    }

    if (nextUrl) {
        const right = document.createElement('a');
        right.href = nextUrl;
        right.className = 'aspect-arrow aspect-arrow-right';
        right.innerHTML = '<span class="aspect-arrow-label">' + nextName + '</span><span class="aspect-arrow-icon">›</span>';
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
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 0.8rem;
            text-decoration: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            background: rgba(0, 30, 66, 0.06);
            border-radius: 8px;
        }
        .aspect-arrow:hover {
            opacity: 1;
            background: rgba(0, 30, 66, 0.1);
        }
        .aspect-arrow-left { left: 1rem; }
        .aspect-arrow-right { right: 1rem; }
        .aspect-arrow-icon {
            font-size: 2rem;
            color: var(--navy, #001e42);
            font-weight: 300;
            line-height: 1;
        }
        .aspect-arrow-label {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--navy, #001e42);
            text-transform: uppercase;
            letter-spacing: 1px;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            transform: rotate(180deg);
        }
        .aspect-arrow-right .aspect-arrow-label {
            transform: rotate(0deg);
        }
        body:hover .aspect-arrow {
            opacity: 0.4;
        }
        body:hover .aspect-arrow:hover {
            opacity: 1;
        }
        @media (max-width: 768px) {
            .aspect-arrow { display: none; }
        }
    `;
    document.head.appendChild(style);
})();
