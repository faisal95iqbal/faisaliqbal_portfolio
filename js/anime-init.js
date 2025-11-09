window.addEventListener('load', function () {
    if (!window.anime) return;

    // 1. Subtle Hero Heading Entrance & Image Pop-in
    anime.timeline({
        easing: 'easeOutQuad',
        duration: 700
    })
        // Image pop-in (replaces CSS animation for more control)
        .add({ targets: '.hero-photo-ring', scale: [0.8, 1.05, 1], opacity: [0, 1], duration: 800, easing: 'easeOutBack', delay: 200 })
        // Text entrance
        .add({ targets: '.name', translateY: [-20, 0], opacity: [0, 1], delay: 100 }, '-=500')
        .add({ targets: '.tagline', translateY: [-12, 0], opacity: [0, 1], delay: 100 }, '-=600');

    // 2. Gentle pulse on hero CTAs
    anime({ targets: '.btn.primary', scale: [0.98, 1], duration: 1800, direction: 'alternate', loop: true, easing: 'easeInOutSine' });
});


/**
 * Function to animate skill bars using anime.js.
 * This function will be called from global.js when the skills section enters the viewport.
 */
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        const percent = card.getAttribute('data-percent');
        const fillElement = card.querySelector('.skill-fill');

        anime({
            targets: fillElement,
            width: percent + '%',
            easing: 'easeInOutQuad',
            duration: 1200,
            delay: 100 * index, // Staggered delay
        });
    });
}

window.addEventListener('load', function () {
    if (!window.anime) return;

    // --- Hero Section Entrance Animations ---
    anime.timeline({
        easing: 'easeOutQuad',
        duration: 700
    })
        .add({ targets: '.name', translateY: [-20, 0], opacity: [0, 1], delay: 200 })
        .add({ targets: '.tagline', translateY: [-12, 0], opacity: [0, 1], delay: 100 });


    // gentle pulse on hero CTAs
    anime({ targets: '.btn.primary', scale: [0.98, 1], duration: 1800, direction: 'alternate', loop: true, easing: 'easeInOutSine' });


    // --- Universal Section Header Animation (New) ---
    // Target all .section-header elements. They start hidden (opacity: 0, translateY: 10px in CSS).
    anime({
        targets: '.section-header',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 800,
        delay: anime.stagger(100, { start: 1000 }), // Stagger animation start for each header
        easing: 'easeOutSine',
    });

});