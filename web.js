// script.js

// 1. Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
}

// 2. Load preference from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark-mode");
  }

  // Optional smooth scroll (for in-page links)
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

