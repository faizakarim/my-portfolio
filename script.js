document.addEventListener("DOMContentLoaded", function () {
    const openTabButton = document.getElementById("openTabButton");

    openTabButton.addEventListener("click", function () {
        const newTabUrl = "https://apps.apple.com/pk/app/gilgitapp/id1599705573"; 
        window.open(newTabUrl, "_blank");
    });
});
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= 0) {
            navbar.style.backgroundColor = section.style.backgroundColor;
        }
    });
})

const section = document.querySelector('.section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const scrollThreshold = window.innerHeight / 2;

    if (scrollPosition > scrollThreshold) {
        section.style.backgroundColor = '#e74c3c'; 
    } else {
        section.style.backgroundColor = '#3498db'; 
    }
});





