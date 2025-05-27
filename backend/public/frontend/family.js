document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("themeSwitcher");
    const body = document.body;
  
    // Load theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light";
    body.classList.remove("light", "dark");
    body.classList.add(currentTheme);
    updateThemeStyles(currentTheme);
  
    // Event listener for the theme switcher button
    themeSwitcher.addEventListener("click", () => {
      const newTheme = body.classList.contains("light") ? "dark" : "light";
      body.classList.remove("light", "dark");
      body.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeStyles(newTheme);
    });
  
    // Function to update the button text and styles based on the theme
    function updateThemeStyles(theme) {
      if (theme === "dark") {
        themeSwitcher.textContent = "Switch to Light Mode";
        body.style.background = "linear-gradient(to bottom right, #1e293b, #374151)";
        body.style.color = "#ffffff";
        themeSwitcher.style.backgroundColor = "#374151";
        themeSwitcher.style.color = "#ffffff";
      } else {
        themeSwitcher.textContent = "Switch to Dark Mode";
        body.style.background = "linear-gradient(to bottom right, #edf2f7, #cbd5e1)";
        body.style.color = "#1e293b";
        themeSwitcher.style.backgroundColor = "#1f2937";
        themeSwitcher.style.color = "#ffffff";
      }
    }
  });