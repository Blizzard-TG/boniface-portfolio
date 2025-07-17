// script.js

// Smooth scroll navigation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  for (let link of links) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});
