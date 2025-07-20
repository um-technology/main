document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const tabs = document.querySelectorAll(".tab");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const tabId = this.dataset.tab;

      // Hide all tabs
      tabs.forEach(tab => tab.classList.remove("active"));

      // Show selected tab
      const activeTab = document.getElementById(tabId);
      if (activeTab) {
        activeTab.classList.add("active");
      }

      // Update navigation styles
      navLinks.forEach(nav => nav.classList.remove("active-tab"));
      this.classList.add("active-tab");
    });
  });

  // Disable right-click
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Disable drag events
  document.addEventListener("dragstart", e => e.preventDefault());

  // Disable middle mouse button click
  window.addEventListener("mousedown", e => {
    if (e.button === 1) e.preventDefault();
  });
});
