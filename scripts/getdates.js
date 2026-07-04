document.addEventListener("DOMContentLoaded", function() {











const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedParagraph = document.getElementById("last-modified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent =  `Last Modification: ${document.lastModified}`;
}

});




