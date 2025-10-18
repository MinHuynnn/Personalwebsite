document.addEventListener("DOMContentLoaded", function () {
    // Hiệu ứng vào trang
    document.body.classList.add('page-enter');
    requestAnimationFrame(() => {
        document.body.classList.add('page-enter-active');
        setTimeout(() => {
            document.body.classList.remove('page-enter', 'page-enter-active');
        }, 700);
    });

    // Hiệu ứng khi chuyển trang
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
});
