document.addEventListener("DOMContentLoaded", function () {
    // --- Hiệu ứng vào trang ---
    document.body.classList.add('page-enter');
    requestAnimationFrame(() => {
        document.body.classList.add('page-enter-active');
        setTimeout(() => {
            document.body.classList.remove('page-enter', 'page-enter-active');
        }, 700);
    });

    // --- Hiệu ứng khi chuyển trang ---
    document.querySelectorAll('a[data-anim], a[href$=".html"]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;

        a.addEventListener('click', function (ev) {
            ev.preventDefault();
            document.body.classList.add('page-exit');
            requestAnimationFrame(() => document.body.classList.add('page-exit-active'));
            setTimeout(() => window.location.href = href, 450);
        });
    });

    // --- Hiệu ứng vòng tròn kỹ năng ---
    const circles = document.querySelectorAll('.skill-circle');

    circles.forEach(circle => {
        const percentText = circle.querySelector('.skill-percentage').textContent;
        const percent = parseInt(percentText);

        let color = '#6366f1'; // mặc định tím

        if (percent >= 85) color = '#c522adff';     // xanh lá – giỏi
        else if (percent >= 70) color = '#eab308'; // vàng – khá
        else color = '#ef4444';                    // đỏ – yếu

        circle.style.setProperty('--percent', percent);
        circle.style.setProperty('--skill-color', color);
    });
});

