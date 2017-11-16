var header = document.querySelector(".header");
var headerH = header.offsetHeight;
var navbar = document.querySelector(".navbar");
var toShow = document.querySelectorAll(".toShow");

var slider = document.querySelector(".testimonialsContainer");
var sliderW = slider.style.width;
var sliderPage = sliderW/2;

var stickynav = function(){

    if(window.innerWidth > 640){
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
    
}

var spyshow = function(){
    for (let i = 0; i < toShow.length; i++) {
        var element = toShow[i];
        if (element.offsetTop < scrollY + (window.innerHeight /1.8)) {
            element.classList.add("showed");
        }
    }
}

var sliderf = function(){
    slider.style.transform = "translateX(" + sliderPage * -1 +"px)";
}

window.addEventListener('scroll', function(){
    stickynav();
    spyshow();
});

document.addEventListener('load', function(){
    stickynav();
    spyshow();
});

window.addEventListener('resize', function(){
    stickynav();
    spyshow();
});

sliderf();

