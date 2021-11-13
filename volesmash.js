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


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
