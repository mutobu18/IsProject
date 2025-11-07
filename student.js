// ============================
// SIDEBAR HIGHLIGHT
// ============================
const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(li => li.classList.remove("active"));
        item.classList.add("active");
    });
});


// ============================
// ELEMENT REFERENCES
// ============================
const dashboard = document.querySelector(".cards");
const statusBtn = document.querySelector(".status-btn");
const title = document.querySelector(".title");
const requestForm = document.getElementById("requestForm");


// ============================
// SHOW NEW REQUEST FORM
// ============================
const newRequestBtn = document.querySelector(".menu li:nth-child(2)");

newRequestBtn.addEventListener("click", () => {
    dashboard.style.display = "none";    // hide dashboard cards
    statusBtn.style.display = "none";    // hide status button
    title.textContent = "New Visitor Request"; // change title
    requestForm.style.display = "block"; // show the form
});


// ============================
// STATUS BUTTON ACTION
// ============================
statusBtn.addEventListener("click", () => {
    alert("This will show request approval status (connect to backend later).");
});


// ============================
// CARD BUTTONS (View Details)
// ============================
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Details will be shown here (reports, incidents, accepted requests, etc.)");
    });
});


// ============================
// LOGOUT
// ============================
document.querySelector(".logout").addEventListener("click", () => {
    window.location.href = "login.html";
});


// ============================
// ANIMATE CARDS ON PAGE LOAD
// ============================
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});


// ============================
// SUBMIT NEW VISITOR REQUEST
// ============================
document.getElementById("visitorForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Your visitor request has been submitted!");

    this.reset(); // clear form
});
