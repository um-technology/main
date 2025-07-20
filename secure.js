// main.js

(() => {
  "use strict";

  // Prevent console access (basic obfuscation)
  Object.defineProperty(window, "console", {
    get() {
      throw new Error("Console access is restricted");
    }
  });

  // Disable DevTools shortcut keys (F12, Ctrl+Shift+I, etc.)
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("This action is disabled for security reasons.");
    }
  });

  // Disable right-click
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Disable dragging and text selection
  document.addEventListener("dragstart", e => e.preventDefault());
  document.addEventListener("selectstart", e => e.preventDefault());

  // Disable middle mouse button click
  window.addEventListener("mousedown", e => {
    if (e.button === 1) e.preventDefault();
  });

  // Prevent frame embedding (clickjacking)
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

  // Tab navigation
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const tabs = document.querySelectorAll(".tab");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const tabId = this.dataset.tab;

        tabs.forEach(tab => tab.classList.remove("active"));

        const activeTab = document.getElementById(tabId);
        if (activeTab) {
          activeTab.classList.add("active");
        }

        navLinks.forEach(nav => nav.classList.remove("active-tab"));
        this.classList.add("active-tab");
      });
    });
  });
})();
