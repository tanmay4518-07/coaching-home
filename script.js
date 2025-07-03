// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Language Toggle
const langToggle = document.getElementById("languageToggle");
let isHindi = false;

langToggle.addEventListener("click", () => {
  isHindi = !isHindi;
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = isHindi ? el.getAttribute("data-hi") : el.getAttribute("data-en");
  });
  langToggle.textContent = isHindi ? "English" : "हिन्दी";
});
