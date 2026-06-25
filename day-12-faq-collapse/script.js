const toggleButtons = document.querySelectorAll('.faq-toggle');
const faqBoxes = document.querySelectorAll('.faq');

toggleButtons.forEach( toggleButton => {
    toggleButton.addEventListener( 'click', () => {
        toggleButton.parentElement.classList.toggle('active');
    });
});
