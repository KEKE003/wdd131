document.addEventListener("DOMContentLoaded", () => {

    let reviewCount = Number(localStorage.getItem("reviewSubmissionCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewSubmissionCount", reviewCount);

    const counterDisplay = document.getElementById("counter-value");
    if(counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }

    const currentYearSpan = document.getElementById("year"); 
    if(currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById("lastModified");
    if(lastModifiedSpan) {
        lastModifiedSpan.textContent = `${document.lastModified}`;
    }
    
});
