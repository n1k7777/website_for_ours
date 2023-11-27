const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openMenu() {
  var menu = document.querySelector(".lang-menu");
  if (menu) {
    var ul = menu.querySelector('ul');

    if (ul.style.display === 'block') {
      ul.style.display = 'none';
    }
    else {
      ul.style.display = 'block';
    }
  }
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

ScrollReveal({
  reset: true,
  duration: 1000, 
  distance: '50px', 
  origin: 'bottom', 
});


ScrollReveal().reveal('.title', { delay: 200 });
ScrollReveal().reveal('.first-text', { delay: 200 });
ScrollReveal().reveal('.second-text', { delay: 350 });
ScrollReveal().reveal('.third-text', { delay: 450 });