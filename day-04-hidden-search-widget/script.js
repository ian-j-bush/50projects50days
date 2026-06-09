const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

const active = false;

button.addEventListener( 'click', () => {
    search.classList.toggle('active');
    input.focus();
});