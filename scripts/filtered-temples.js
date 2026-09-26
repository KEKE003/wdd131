const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent =  `Last Modification: ${document.lastModified}`;
}

const menuButton = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav");
if (menuButton && navMenu) {
    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("open");
    });
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,  
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558, 
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  { 
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 15000,
    imageUrl:
    "https://th.bing.com/th/id/OIP.8Sp8sZWwuQOGd6WimzwW4AHaEo?w=371&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 10730,
    imageUrl:
    "https://th.bing.com/th/id/OIP.bQsuHWoDuroW5VRbSI1LdwHaFj?w=252&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53500,
    imageUrl:
    "https://th.bing.com/th/id/OIP.xkJMg0HJO9FrNoV5guPAvwHaIw?w=198&h=234&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

const gallery = document.getElementById("temple-gallery");
const galleryTitle = document.getElementById("gallery-title");
const mainNav = document.getElementById("main-nav");
const menuToggle = document.getElementById("menu-toggle");

function displayTemples(filteredTemples) {
  if (!gallery) return; 

  gallery.replaceChildren();
  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${temple.dedicated}</p>
      <p><span>Area:</span> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} - ${temple.location}" loading="lazy">
    `;

    gallery.appendChild(card);
  });
}
    
function getDedicationYear(dedicatedDate) {
  const dateParts = dedicatedDate.split(", ");
  if (dateParts.length < 2) return null;
  return parseInt(dateParts[0], 10);
}
 
document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll("#main-nav a").forEach(link => link.classList.remove("active"));
    link.classList.add("active");
 
    const filterId = link.id;
    let selectedTemples = [...temples];

    if (filterId === "filter-home") {
        selectedTemples = temples;
        galleryTitle.textContent = "Home(All Temples)";
    }
    else if (filterId === "filter-old") {
        selectedTemples = temples
          .filter(temple => getDedicationYear(temple.dedicated) < 1900)
          .sort((first, second) => getDedicationYear(first.dedicated) - getDedicationYear(second.dedicated));
        galleryTitle.textContent = "Old Temples (Before 1900)";
    }
    else if (filterId === "filter-new") {
        selectedTemples = temples
          .filter(temple => getDedicationYear(temple.dedicated) >= 2000)
          .sort((first, second) => getDedicationYear(second.dedicated) - getDedicationYear(first.dedicated));
        galleryTitle.textContent = "New Temples (2000 and After)";
    }
    else if (filterId === "filter-large") {
        selectedTemples = temples.filter(temple => temple.area > 90000);
        galleryTitle.textContent = "Large Temples (Over 90,000 sq ft)";
    }
    else if (filterId === "filter-small") {
        selectedTemples = temples
          .filter(temple => temple.area <= 100000)
          .sort((first, second) => first.area - second.area);
        galleryTitle.textContent = "Small Temples (100,000 sq ft and Under)";
    }

    displayTemples(selectedTemples);

    if (window.innerWidth < 768) {
        mainNav.classList.remove("open");
    }
});
});

menuToggle.addEventListener("click", () => { 
    mainNav.classList.toggle("open");
});

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

displayTemples(temples);
