const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener("click", function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");
});

// Function that moves the logos
const logos = document.querySelector(".rotating-logos__track").cloneNode(true)
document.querySelector(".rotating-logos").appendChild(logos);
