document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // --- Navigation Toggle Logic ---
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('modal-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    });

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Project Modal Logic Initialization ---
    const modalOverlay = document.getElementById('project-modal');
    if (modalOverlay) {
        // Close modal when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeProjectModal();
            }
        });
        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
                closeProjectModal();
            }
        });
    }
});

/**
 * Shows the project details modal, populating content from the clicked card.
 * @param {HTMLElement} cardElement The .project-card element that was clicked.
 */
window.showProjectModal = function (cardElement) {
    const projectData = cardElement.getAttribute('data-project');
    if (!projectData) return console.error('No project data found on card.');

    let data;
    try {
        data = JSON.parse(projectData);
    } catch (e) {
        return console.error('Invalid JSON data in data-project attribute:', e);
    }

    // Get modal elements
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const tags = document.getElementById('modal-tags');
    const description = document.getElementById('modal-description');
    const liveLink = document.getElementById('modal-live-link');
    const githubLink = document.getElementById('modal-github-link');

    // Populate content
    title.textContent = data.title;
    tags.textContent = data.tags;
    description.textContent = data.description;

    // Set links, showing/hiding based on existence
    if (data.liveLink) {
        liveLink.href = data.liveLink;
        liveLink.style.display = 'flex';
    } else {
        liveLink.style.display = 'none';
    }

    if (data.githubLink) {
        githubLink.href = data.githubLink;
        githubLink.style.display = 'flex';
    } else {
        githubLink.style.display = 'none';
    }

    // Show modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Hides the project details modal.
 */
window.closeProjectModal = function () {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore background scrolling
}