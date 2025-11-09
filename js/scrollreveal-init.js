window.addEventListener('load', function () {
    if (!window.ScrollReveal) return;
    const sr = ScrollReveal({ distance: '30px', duration: 700, easing: 'ease-in-out', reset: false });
    sr.reveal('[data-sr]', { origin: 'left', interval: 100 });
    sr.reveal('.skill-card', { origin: 'bottom', interval: 120 });
    sr.reveal('.project-card', { origin: 'bottom', interval: 120 });
    });