// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onlick = () =>{
    navbarNav.classList.toggle('active');
    
};

// klik di luar sidebar untuk menghilangakan nav nya
const hamburger = document.querySelector ('hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) $$ !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});