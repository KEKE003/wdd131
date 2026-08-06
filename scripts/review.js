document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewsCompleted");

    if(reviewCount === null) {
        reviewCount = 0;
    }

    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewsCompleted", reviewCount);

    const counterDisplay = document.getElementById("review-counter");
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
