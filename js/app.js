var header = document.querySelector(".header");
var headerH = header.offsetHeight;
var navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function(){
    if (scrollY >= (headerH/2)) {
        navbar.classList.add("fixed");
    }else{
        navbar.classList.remove("fixed")
    }
    if(scrollY >= headerH && navbar.classList.contains("fixed")){
        navbar.classList.add("--sticky");
    }else{
        navbar.classList.remove("--sticky");
    }


});