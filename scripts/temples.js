document.addEventListener("DOMContentLoaded", function() {

const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent =  `Last Modification: ${document.lastModified}`;
}

const menuButton = document.getElementById("menu");
const navMenu = document.querySelector("nav");
if (menuButton && navMenu) {
    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("open");
    });
}

});