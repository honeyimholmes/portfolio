document.addEventListener("DOMContentLoaded", function () {

    var menuBtn = document.querySelector(".menu-btn");
    var menuLeft = document.querySelector(".navbar-fixed-left");
    var menuLeftHidden = document.querySelector(".menu-left-hidden");
    var menuPortfolio = document.querySelector(".menu-portfolio");
    var menuPortHidden = document.querySelector(".menu-portfolio-hidden");
    var socialList = document.querySelector(".social-list");
    var socialListHidden = document.querySelector(".social-list-hidden");
    var menuClass = document.querySelector(".menu");
    var redaktor = document.querySelector(".red");
    var portfolioRed = document.querySelector(".header-port-1");
    var portfolioFront = document.querySelector(".header-port-2");
    var feDev = document.querySelector(".fed");
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    
    menuBtn.addEventListener("click", function(e){
        menuLeft.classList.toggle("navbar-fixed-full");
        setTimeout(menuChange, 1000);

    }); 
    
    function menuChange() {
        menuBtn.classList.toggle("fa-code");
        menuLeftHidden.classList.toggle("menu-show");
        socialList.classList.toggle("social-close");
        socialListHidden.classList.toggle("social-list-open");
        menuClass.style.marginTop = "30px"; 
    }
    

    
                    
});
