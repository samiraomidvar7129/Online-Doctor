// Save Theme In LocalStorage
const darkTheme=()=> {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }}

  // A function to attach a click event to all dark mode buttons
  function attachDarkModeEvent() {
    const switches = document.querySelectorAll(".switch");
    switches.forEach(sw => {
      sw.removeEventListener("click", darkTheme); // جلوگیری از اتصال چندباره
      sw.addEventListener("click", darkTheme);
    });
  }
  
  //Page load time, Local Storage status
  window.addEventListener("DOMContentLoaded", () => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "dark") {
      document.body.classList.add("dark");
    }
  
    // Initial binding of dark mode to on-screen buttons (desktop version)
    attachDarkModeEvent();
  
    // Check and reconnect dark mode
    const offcanvasEl = document.getElementById("mobileMenu");
    if (offcanvasEl) {
      offcanvasEl.addEventListener("shown.bs.offcanvas", attachDarkModeEvent);
    }
  });
  