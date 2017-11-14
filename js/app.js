var header = document.querySelector(".header");
var headerH = header.offsetHeight;
var navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function(){
    if(scrollY >= headerH && !navbar.classList.contains("fixed")){
        navbar.classList.add("fixed");
        navbar.classList.toggle("--open");
    }
    if(scrollY <= headerH && navbar.classList.contains("fixed")){
        navbar.classList.add("--close");
        navbar.classList.remove("--open");
        navbar.classList.remove("fixed");
    }
});