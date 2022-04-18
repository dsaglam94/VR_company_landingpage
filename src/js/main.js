// Menu toggle variables
let menuToggle = document.querySelector('.menu-toggle');
let navBar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('active');
})