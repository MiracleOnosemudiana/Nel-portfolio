let openNavBtn = document.querySelector('.open-menu')
let closeNavBtn = document.querySelector('.close-menu')
let navbarLinks = document.querySelector('.navbar-links')

document.onload = closeNavBtn.style.display= 'none';

function openMenu(){
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline';
    navbarLinks.style.display = 'block';
}

function closeMenu(){   
    openNavBtn.style.display = 'inline';
    closeNavBtn.style.display = 'none';
    navbarLinks.style.display = 'none';
}



openNavBtn.addEventListener('click', openMenu);
closeNavBtn.addEventListener('click', closeMenu);