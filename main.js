console.log('Welcome to my portfolio website!!');

// NAVBAR
////////////////////////////////////////////////////////////////////////////////
window.addEventListener(`scroll`, function(){
    let nav = document.querySelector(`nav`);
    nav.classList.toggle(`sticky`, window.scrollY > 0);
});

function toggleMenu(){
    let menuToggle = document.querySelector(`.toggle`);
    let menu = document.querySelector(`.menu`);
    menuToggle.classList.toggle(`active`);
    menu.classList.toggle(`active`);
} 
