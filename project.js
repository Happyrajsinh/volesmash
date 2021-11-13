const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar")
// const




function Myheight(x){
    if(x.matches){
        header.style.height="170px"
        navbar.style.height="100%"
    }
}
var x = window.matchMedia('(min-width:1230px)')
Myheight(x)
x.addListener(Myheight)
// ------------------------------------------------------------
hamburger.addEventListener("click", mobileMenu);
window.addEventListener("scroll", closemenu);
// body.addEventListener("scroll", closemenu );
let c=true;
function mobileMenu() {
    // c+=1
    if(c){
        header.style.transition = "all 0.3s ease-in-out"
        header.style.height = "600px"
        navbar.style.height = "17%"
        c=false;
    }else{
        header.style.height = "170px"
        navbar.style.height = "100%"
        c=true;

    }

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closemenu(){
    header.style.height = "170px"
    navbar.style.height = "100%"
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    c=true;
}
