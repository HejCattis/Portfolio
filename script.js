const showMoreBtn = document.getElementById('show-more-btn');
const section = document.querySelector('.section');

showMoreBtn.addEventListener('click', () => {
  if (section.classList.contains('show-more')) {
    section.classList.remove('show-more');
    showMoreBtn.textContent = 'Läs mer';
  } else {
    section.classList.add('show-more');
    showMoreBtn.textContent = 'Läs mindre';
  }
});

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

window.onscroll = function() {
  var navbar = document.querySelector('header');
  var scrollDistance = 400; // set the scroll distance to 100 pixels
  if (window.pageYOffset > scrollDistance) {
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
  }
};