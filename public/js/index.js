// small devices - open navigation

const menuBtn = document.querySelector('.header__menuBtn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('menu--open');
});

nav.addEventListener('click', (e) => {
  if (e.target.attributes[0].name === 'href')
    nav.classList.remove('menu--open');
});

// form submit

const form = document.querySelector('form');

form.addEventListener('submit', (e) => e.preventDefault());
