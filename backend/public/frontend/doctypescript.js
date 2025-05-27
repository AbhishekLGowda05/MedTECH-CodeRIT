// Script file: doctypescript.js

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("themeSwitcher");
  const body = document.body;

  themeSwitcher.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");

      body.style.backgroundColor = "#1e293b";
      body.style.color = "#f8fafc";

      document.getElementById("heroSection").style.backgroundColor = "#111827";
      document.getElementById("footerSection").style.backgroundColor = "#1f2937";

      document.querySelectorAll(".feature-box").forEach((box) => {
        box.style.backgroundColor = "#374151";
        box.style.color = "#d1d5db";
      });

      themeSwitcher.textContent = "Switch to Light Mode";
      themeSwitcher.style.backgroundColor = "#374151";
    } else {
      body.classList.remove("dark");
      body.classList.add("light");

      body.style.backgroundColor = "#f8fafc";
      body.style.color = "#1e293b";

      document.getElementById("heroSection").style.backgroundColor = "#e5e7eb";
      document.getElementById("footerSection").style.backgroundColor = "#2563eb";

      document.querySelectorAll(".feature-box").forEach((box) => {
        box.style.backgroundColor = "#ffffff";
        box.style.color = "#1f2937";
      });

      themeSwitcher.textContent = "Switch to Dark Mode";
      themeSwitcher.style.backgroundColor = "#1f2937";
    }
  });
});
