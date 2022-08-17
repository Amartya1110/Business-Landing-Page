const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-nav");
})

// Removing the classes
function removeClass() {
    if(window.innerWidth >= 1024) {
        navMenu.classList.remove("toggle-nav");
    }
}

window.addEventListener("resize", () => removeClass());