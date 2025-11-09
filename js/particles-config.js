tsParticles.load("tsparticles", {
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    fpsLimit: 60,
    background: {
        
    },
    particles: {
        number: { value: 0 },
        color: {
            value: ["#7B2CBF", "#9D4EDD", "#C77DFF", "#F3C4FB"],
            animation: {
                enable: true,
                speed: 60,
                sync: false,
            },
        },
        shape: { type: "circle" },
        opacity: {
            value: { min: 0.3, max: 1 },
            animation: {
                enable: true,
                speed: 1,
                startValue: "max",
                destroy: "min",
            },
        },
        size: {
            value: { min: 1, max: 5 },
            animation: {
                enable: true,
                speed: 4,
                startValue: "min",
                destroy: "max",
            },
        },
        move: {
            enable: true,
            gravity: { enable: false },
            speed: { min: 1, max: 3 },
            direction: "none",
            outModes: { default: "destroy" },
            decay: 0.05, // slow fade-out motion for trailing particles
        },
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onhover: {
                enable: true,
                mode: "trail", // particles follow cursor
            },
            resize: true,
        },
        modes: {
            trail: {
                delay: 0.005,
                pauseOnStop: true,
                quantity: 3,
                particles: {
                    color: {
                        value: ["#9D4EDD", "#C77DFF"],
                    },
                    move: {
                        outModes: { default: "destroy" },
                        speed: { min: 2, max: 4 },
                        decay: 0.08, // fade-out as particles move away
                    },
                    size: { value: { min: 1, max: 3 } },
                    opacity: {
                        value: { min: 0.2, max: 0.6 },
                        animation: {
                            enable: true,
                            speed: 1,
                            startValue: "max",
                            destroy: "min",
                        },
                    },
                },
            },
            parallax: {
                enable: true,
                smooth: 25, // smoother motion
                force: 40, // how much the background moves
            },
        },
    },
    retina_detect: true,
});
  