// Clay Astro theme — vanilla JS version
// Handles: mobile nav (hamburger) toggle + light/dark theme toggle

function initNavBurger() {
  const burger = document.querySelector(".nav-burger");
  const wrapper = document.querySelector(".site-wrapper");
  if (!burger || !wrapper) return;
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.toggle("site-head-open");
  });
}

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");

  const updateIcons = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");
    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? "inline-block" : "none";
      moonIcon.style.display = isDark ? "none" : "inline-block";
    }
  };

  updateIcons();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const newTheme = isDark ? "light" : "dark";
      if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", newTheme);
      updateIcons();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavBurger();
  initThemeToggle();
});
