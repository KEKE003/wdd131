const products = [
    {id: "fc - 1888", name: "flux capacitor", averagerating: 4.5},
    {id: "fc - 2050", name: "pacer converter", averagerating: 4.7},
    {id: "fs - 1987", name: "warp drive", averagerating: 4.1 },
    {id: "fv - 3000", name: "neoflex visor", averagerating: 3.8}
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    if (productSelect) {
        productSelect.forEach (product => {
            const option = document.createElement(option);
            option.value = product.id;
            option.textContent = product.name.replace (/\b\w/g,c => c.toUpperCase());
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