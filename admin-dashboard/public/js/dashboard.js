/**
 * Admin Dashboard UI Scripts
 * Handles sidebar toggling, tooltips, and interactive components
 */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        sidebar.classList.toggle("show");
        if (sidebarBackdrop) {
          sidebarBackdrop.classList.toggle("show");
        }
      } else {
        sidebar.classList.toggle("collapsed");
      }
    });
  }

  if (sidebarBackdrop && sidebar) {
    sidebarBackdrop.addEventListener("click", () => {
      sidebar.classList.remove("show");
      sidebarBackdrop.classList.remove("show");
    });
  }

  // Initialize Bootstrap Tooltips if bootstrap is loaded
  if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }
});
