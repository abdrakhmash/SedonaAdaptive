var svgData = document.querySelector(".header__logo-svg");
var width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
            
            if (width < 768) { 
                svgData.data = "img/header__logo--mobile.svg"
            }
            else if (width >= 768 && width < 1200) {
                svgData.data = "img/header__logo--tablet.svg"
            }
            else {
                svgData.data = "img/header__logo-sedona.svg"
            };
            

var link = document.querySelector(".header__menu-icon");
var popup = document.querySelector(".navigation-panel");
var close = document.querySelector(".navigation-panel__close-btn");
            
            
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("navigation-panel--on");
            });
            close.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.remove("navigation-panel--on");
            });