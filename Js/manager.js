// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const checkBtn = document.querySelector(".check-btn");
  const viewButtons = document.querySelectorAll(".view-btn");
  const logoutBtn = document.querySelector(".logout");
  const notification = document.querySelector("nav li:nth-child(1)");

  // "Check new request" button
  checkBtn.addEventListener("click", function () {
    alert("Checking for new requests...");
  });

  // "View details" buttons
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Displaying more details...");
    });
  });

  // Notifications
  notification.addEventListener("click", function () {
    alert("You have 1 new notification!");
  });

  // Logout button
  logoutBtn.addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      alert("You have been logged out successfully.");
      window.location.href = "login.html"; // Redirect to login page
    }
  });
});
