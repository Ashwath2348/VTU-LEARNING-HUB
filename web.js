// Smooth scroll behavior for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Expand/collapse year sections
document.querySelectorAll('.year h3').forEach(heading => {
    heading.style.cursor = 'pointer';
    heading.addEventListener('click', () => {
        const list = heading.nextElementSibling;
        if (list && list.tagName.toLowerCase() === 'ul') {
            list.style.display = (list.style.display === 'none') ? 'block' : 'none';
        }
    });
});

// Optional: Auto-collapse all on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.year ul').forEach(ul => {
        ul.style.display = 'none';
    });
});
