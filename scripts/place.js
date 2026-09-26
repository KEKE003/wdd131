document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 10;
const windSpeed = 4.8;

function calculateWindChill (temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

const windChillElement = document.getElementById('wind-chill');
let windChillDisplay;

if (temperature <= 10 && windSpeed > 4.8) {
    const calculatedChill = calculateWindChill (temperature, windSpeed);
    windChillDisplay = `Wind Chill: ${Math.round(calculatedChill)}°C`;
}
else {
    windChillDisplay = "Wind Chill: N/A";
}

windChillElement.textContent = windChillDisplay;