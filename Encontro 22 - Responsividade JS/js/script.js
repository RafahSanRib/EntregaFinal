/* MENU HAMBURGER */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

/* MODAL */
const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.style.display = 'flex';
document.getElementById('closeModal').onclick = () => modal.style.display = 'none';

/* CARROSSEL */
const slides = document.querySelector('.slides');
let index = 0;

document.querySelector('.next').onclick = () => {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + 3) % 3;
    slides.style.transform = `translateX(-${index * 100}%)`;
};
