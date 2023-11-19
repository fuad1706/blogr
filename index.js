var hamburger = document.querySelector(".harmburger");
var navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", function() {
    console.log("Menu clicked");
    navLinks.classList.toggle("show-menu");
});