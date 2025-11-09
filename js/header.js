/* ===== HEADER INTERACTIVITY ===== */
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle Menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        const menuOpen = navMenu.classList.contains("active");
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }
    });

    // Close menu on link click & smooth scroll
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Reset body styles first
                document.body.style.overflow = "";
                document.body.style.position = "";
                document.body.style.width = "";

                // Scroll to target
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Close menu
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });

    // Click outside to close
    document.addEventListener("click", (e) => {
        if (
            navMenu.classList.contains("active") &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });

    // Header background change on scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
