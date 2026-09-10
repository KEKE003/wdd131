const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent =  `Last Modification: ${document.lastModified}`;
}

const hamburgerBtn = document.getElementById("hamburger-btn");
const navList = document.getElementById("nav-list");

hamburgerBtn.addEventListener("click", () =>{
    navList.classList.toggle("active");

    if (navList.classList.contains("active")){
        hamburgerBtn.innerHTML = "&#10005;";
        hamburgerBtn.setAttribute("aria-label", "Close navigation menu");
    }
    else{
        hamburgerBtn.innerHTML ="&#9776;";
        hamburgerBtn.setAttribute("aria-label", "Open navigation menu");
    }
});
