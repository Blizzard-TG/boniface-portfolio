// script.js (cleaned for multi-page navigation + theme)

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Apply stored theme
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark");
  }

  // Theme toggle
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark");
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });

  // ❌ REMOVE this block for multi-page navigation
  // It interferes with <a href="about.html">
});
