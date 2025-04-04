// DOMContentLoaded ensures the script runs after the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Example: Add a scroll effect to highlight the nav bar
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Example: Alert for contact link (placeholder interaction)
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Contact page is under construction.");
        });
    }

    // Toggle mobile menu (if you plan to add it)
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.querySelector('nav ul').classList.toggle('active');
        });
    }
});
