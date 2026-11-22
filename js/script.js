const heroBtn = document.querySelector(".hero-btn");
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav-links");

heroBtn.addEventListener("click", function(){
  nav.classList.add("nav-show");
  document.body.classList.add("no-scroll");
});

navBtn.addEventListener("click", function(){
  nav.classList.remove("nav-show");
  nav.classList.add("nav-hide");
  document.body.classList.remove("no-scroll");
});

window.addEventListener("scroll", function(){
  if(window.scrollY > 10) { 
    heroBtn.classList.add("scrolled");
  } else {
    heroBtn.classList.remove("scrolled");
  }
});