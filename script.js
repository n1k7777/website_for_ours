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

function openHamburger() {
  var menu = document.querySelector('.nav-menu');
  if (menu) {
    menu.classList.toggle("active");
  }
}




function closeMenu() {
  var menu = document.querySelector('.nav-menu');
  var dropDownBar = document.querySelector('.hamburger input')
  if (menu && dropDownBar) {
    menu.classList.remove("active");
    dropDownBar.checked = false;
  }
}

ScrollReveal({
  reset: true,
  duration: 1000, 
  distance: '100px', 
  origin: 'bottom', 
});

ScrollReveal().reveal('.title', { delay: 200 });
ScrollReveal().reveal('.first-text', { delay: 200 });
ScrollReveal().reveal('.second-text', { delay: 350 });
ScrollReveal().reveal('.about-pic', { delay: 250, distance: '30px'});
ScrollReveal().reveal('.text-container p', { delay: 300, distance: '50px'});
ScrollReveal().reveal('.section__text img', { delay: 150, distance: '50px'});
ScrollReveal().reveal('#contact .firsts', { delay: 250, distance: '50px'});
ScrollReveal().reveal('#contact .seconds', { delay: 300, distance: '50px'});
ScrollReveal().reveal('#contact .thirds', { delay: 350, distance: '50px'});
ScrollReveal().reveal('footer', { delay: 450, distance: '50px'});
ScrollReveal().reveal('#about .fir', { delay: 250, distance: '50px'});
ScrollReveal().reveal('#about .sec', { delay: 300, distance: '50px'});
ScrollReveal().reveal('#about .thd', { delay: 350, distance: '50px'});