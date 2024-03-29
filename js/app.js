var header = document.querySelector(".header");
var headerH = header.offsetHeight;
var navbar = document.querySelector(".navbar");
var toShow = document.querySelectorAll(".toShow");
var menuButton = document.querySelector(".menuButton");

var slider = document.querySelector(".testimonialsContainer");
var sliderItemW = document.querySelector('.testimonialsItem').offsetWidth * 2;
if(window.innerWidth < 400){
    var sliderItemW = document.querySelector('.testimonialsItem').offsetWidth;
}
var sliderW = slider.offsetWidth;
var sliderPage = Math.round(sliderW/sliderItemW);
var count = 1;

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
    if(window.innerWidth > 400){
        for (let i = 0; i < toShow.length; i++) {
            var element = toShow[i];
            if (element.offsetTop < scrollY + (window.innerHeight /1.2)) {
                element.classList.add("showed");
            }
        }
    }
}

var sliderf = function(){
    setInterval(function(){
        if (count == sliderPage) {
            slider.style.transform = "";
            count = 1;
            
        }else if(count < sliderPage){
            slider.style.transform = "translateX(" + (-sliderItemW * count) + "px)";
            count++;
        }
    }, 4000);
}

menuButton.addEventListener('click', function(){
    navbar.classList.toggle('--open');
});

window.addEventListener('scroll', function(){
    stickynav();
    spyshow();
});

window.addEventListener('load', function(){
    stickynav();
    spyshow();
});

window.addEventListener('resize', function(){
    stickynav();
    spyshow();
});

sliderf();

