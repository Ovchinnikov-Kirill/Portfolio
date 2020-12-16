const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeEL = document.querySelector('.menu__close');
    menuOverlay = document.querySelector('.menu__overlay');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeEL.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});