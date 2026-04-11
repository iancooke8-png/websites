/* ============================================
   Aspect Page Navigation
   Side arrows with large hover zones + preview
   ============================================ */

(function() {
    const page = document.querySelector('[data-aspect]');
    if (!page) return;

    const prevUrl = page.dataset.prev || null;
    const nextUrl = page.dataset.next || null;
    const prevName = page.dataset.prevName || '';
    const nextName = page.dataset.nextName || '';

    // Icon mapping for each aspect
    const icons = {
        'Mortgages': 'fa-house',
        'Income Protection': 'fa-clock',
        'Protection': 'fa-shield-halved',
        'Pensions': 'fa-hourglass-half',
        'Savings': 'fa-wallet',
        'Investments': 'fa-chart-line',
        'Taxation': 'fa-file-invoice',
        'Trusts': 'fa-users',
        'Trusts & Estate Planning': 'fa-users'
    };

    function createArrow(url, name, direction) {
        if (!url) return;

        const icon = icons[name] || 'fa-circle';
        const isLeft = direction === 'left';

        // Large invisible hover zone covering the full edge of the screen
        const zone = document.createElement('a');
        zone.href = url;
        zone.className = 'aspect-zone aspect-zone-' + direction;

        // The preview card that appears on hover
        zone.innerHTML =
            '<div class="aspect-zone-preview">' +
            '<i class="fa-light ' + icon + '"></i>' +
            '<span>' + name + '</span>' +
            '<span class="aspect-zone-arrow">' + (isLeft ? '&#8249;' : '&#8250;') + '</span>' +
            '</div>';

        document.body.appendChild(zone);
    }

    createArrow(prevUrl, prevName, 'left');
    createArrow(nextUrl, nextName, 'right');

    // Mobile swipe
    let touchStartX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 80) {
            if (diff > 0 && nextUrl) window.location.href = nextUrl;
            else if (diff < 0 && prevUrl) window.location.href = prevUrl;
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
        /* The hover zone — tall invisible strip down each side */
        .aspect-zone {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            width: 80px;
            height: 300px;
            display: flex;
            align-items: center;
            text-decoration: none;
            cursor: pointer;
        }

        .aspect-zone-left {
            left: 0;
            justify-content: flex-start;
            padding-left: 0.8rem;
        }

        .aspect-zone-right {
            right: 0;
            justify-content: flex-end;
            padding-right: 0.8rem;
        }

        /* The preview card — hidden until hover */
        .aspect-zone-preview {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            padding: 1rem 1.2rem;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            opacity: 0;
            transform: scale(0.85);
            transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .aspect-zone:hover .aspect-zone-preview {
            opacity: 1;
            transform: scale(1);
        }

        .aspect-zone-preview i {
            font-size: 1.6rem;
            color: #001e42;
            opacity: 0.4;
        }

        .aspect-zone-preview span {
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #001e42;
            white-space: nowrap;
        }

        .aspect-zone-arrow {
            font-size: 1.8rem !important;
            font-weight: 200 !important;
            text-transform: none !important;
            letter-spacing: 0 !important;
            opacity: 0.3;
            line-height: 1;
        }

        @media (max-width: 768px) {
            .aspect-zone { display: none; }
        }
    `;
    document.head.appendChild(style);
})();
