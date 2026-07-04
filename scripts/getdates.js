document.addEventListener("DOMContentLoaded", function() {











const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("last-modified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent =  `Last Modification: ${document.lastModified}`;
}

});




