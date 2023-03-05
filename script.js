let isOpen = false;
let hamb = document.getElementById("hamb");

const navMenu = document.querySelector('.nav-menu');
function statusMenu(){
    hamb.className= isOpen ? "open" : "closed";
    navMenu.classList.toggle('active');
}
function toogleMenu(){
    isOpen = !isOpen;
    statusMenu()
}
hamb.addEventListener('click',toogleMenu);

