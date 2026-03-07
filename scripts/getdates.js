<script>
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    // Get the last modified date
    const lastModified = document.lastModified;
    document.getElementById("last-modified").innerHTML = document.lastModified;
</script>