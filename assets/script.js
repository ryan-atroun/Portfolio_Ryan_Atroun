document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const setTheme = (theme) => {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
    window.localStorage.setItem("theme", theme);
  };

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark");
  } else if (storedTheme === "light") {
    body.classList.add("light");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark =
        body.classList.contains("dark") ||
        (!body.classList.contains("light") && prefersDark.matches);

      setTheme(isDark ? "light" : "dark");
    });
  }
});
