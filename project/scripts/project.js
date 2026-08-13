const positiveStories = [
    {id: 1, name: "Neighborhood Garden Bloom", type: "kindness", author: "Sarah Jenkins", readingTime: "3min read"},
    {id: 2, name: "Overcoming the Odds at 80", type: "inspiration", author: "David Vance", readingTime: "5min read"},
    {id: 3, name: "Local Communities Restore Historical Forest Ecosystem", type: "community", author: "James Erbaugh", readingTime: "6min read"},
    {id: 4, name: "The Art of Slowing Down", type: "inspiration", author: "Elena Rostova", readingTime: "4min read"},
];

document.addEventListener("DOMContentLoaded", () => {
    handleVisitCounter();

    const eventContainer = document.getElementById("event-container");
    if (eventContainer) {
        renderStories (positiveStories);
        setupFilterListener();
    }

    const sightingForm = document.getElementById("sighting-form");
    if (sightingForm) {
        setupFormHandling(sightingForm);
    }
});

function handleVisitCounter () {
    const counterElement = document.getElementById("visit-counter");
    if (!counterElement)
        return;

    let totalVisits = localStorage.getItem("positivityOrbitVisits") || 0;
    totalVisits = parseInt(totalVisits) +1;
    localStorage.setItem("positivityOrbitVisits", totalVisits);

    if (totalVisits === 1) {
        counterElement.textContent = "Welcome to The BrightSide Orbit! Thank you for joining our community of shared optimism.";
    }
    else {
        counterElement.textContent = `You have supported our orbit of shared optimism ${totalVisits} times`;
    }
}

function renderStories(storiesArray) {
    const container = document.getElementById("event-container");
    if (!container)
        return;

    container.innerHTML = "";

    storiesArray.forEach(story => {
        const card = document.createElement("div");
        card.className = `event-card border - ${story.type}`;

        card.innerHTML = `<h3>${story.name}</h3>
        <p><strong>Category: </strong>${story.type.toUpperCase()}</p>
        <p><strong>Shared By: </strong>${story.author}</p>
        <p><strong>Length: </strong>${story.readingTime}</p>`;

        container.appendChild(card);
    });
}

function setupFilterListener() {
    const filterControls = document.getElementById("filter-controls");
    if (!filterControls)
        return;

    filterControls.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON")
            return;

        const filterType = e.target.getAttribute("data-type");
        if (filterType === "all") {
            renderStories (positiveStories);
        }
        else {
            const filtered = positiveStories.filter(item =>
                item.type === filterType);
                renderStories(filtered);
        }
    });
}

function setupFormHandling (formElement) {
    formElement.addEventListener("submit", (e) => {
        const nameInput = document.getElementById("observer-name").value;
        const focusChoice = document.getElementById("object-type").value;

        alert (`Thank you, ${nameInput}! Your contribution under [${focusChoice}] has been successfully✨ published.`);
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