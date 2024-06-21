function outputUpdate(vol) {
    var output = document.querySelector('.fade__volume');
    output.value = vol + '%';
}

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu__list--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});