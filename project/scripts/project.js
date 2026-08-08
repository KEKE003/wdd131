document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks){
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {
                menuToggle.textContent = "❌";
                menuToggle.setAttribute("aria-expanded", "true");
            }
            else {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    const submissionForm = document.querySelector(".optimism-form");
    const feedbackBox = document.getElementById("form-feedback");

    if (submissionForm) {
        submissionForm.addEventListener("submit", event => {
            event.preventDefault();
            const emailInput = document.getElementById("user-email").Value;
            const categorySelect = document.getElementById("story-category").Value;

            feedbackBox.innerHTML = `<p class="success-alert"> ✨Success! Your story has been uploaded. Thanks for contributing to our community database.</p> `;

            submissionForm.reset();

        });
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