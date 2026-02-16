// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// MENU RESPONSIVE
let menuToggle = document.getElementById("menuToggle");
let navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){
  navMenu.classList.toggle("active");
});

// LIGHTBOX EFFECT
let images = document.querySelectorAll(".organisasi-card img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");
let closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", function(){
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
  });
});

closeBtn.addEventListener("click", function(){
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(e){
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});
