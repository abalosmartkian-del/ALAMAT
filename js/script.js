const navScroll = document.querySelector(".hero-btn")

window.addEventListener("scroll", function(){
  if(window.scrollY > 10) { 
    navScroll.classList.add("scrolled");
  } else {
    navScroll.classList.remove("scrolled");
  }
});