document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const tempC = parseFloat(document.getElementById("temp").textContent);
const windKmh = parseFloat(document.getElementById("wind").textContent);

const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

if (tempC <= 10 && windKmh > 4.8) {
    const windChill = calculateWindChill(tempC, windKmh);
    document.getElementById("windchill").textContent = `${windChill.toFixed(1)} °C`;
}
else {
    document.getElementById("windchill").textContent = "N/A";
}