//temas escuro e claro
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
});
