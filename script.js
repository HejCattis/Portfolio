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
