var header = document.querySelector(".header");
var headerH = header.offsetHeight;
var navbar = document.querySelector(".navbar");
var toShow = document.querySelectorAll(".toShow");

var stickynav = function(){
    if (scrollY > (headerH/2)) {
        navbar.classList.add("fixed");
    }else{
        navbar.classList.remove("fixed")
    }
    if(scrollY > headerH && navbar.classList.contains("fixed")){
        navbar.classList.add("--sticky");
    }else{
        navbar.classList.remove("--sticky");
    }
}

var spyshow = function(){
    for (let i = 0; i < toShow.length; i++) {
        var element = toShow[i];
        if (element.offsetTop < scrollY + (window.innerHeight /2)) {
            element.classList.add("showed");
        }
    }
}

window.addEventListener('scroll', function(){
    
    stickynav();
    spyshow();
    
});