document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  const setTheme = (theme) => {
    body.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  };

  const storedTheme = window.localStorage.getItem("theme") || "light";
  setTheme(storedTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.contains("dark");
      setTheme(isDark ? "light" : "dark");
    });
  }
});
