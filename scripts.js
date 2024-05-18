// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Loop through links and add 'active' class to the matching link
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
