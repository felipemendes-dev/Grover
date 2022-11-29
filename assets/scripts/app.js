const menuToggler = document.querySelector('.menu-toggler')
const navbar = document.querySelector('.navbar')
const collapsiveMenu = document.querySelector('.collapsible-menu')

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
    if(navbar.classList.contains('show-menu')){
        collapsiveMenu.style.maxHeight = collapsiveMenu.scrollHeight + 'px';
        setTimeout(() => {
            collapsiveMenu.style.overflow = 'visible';
        }, 500);
    }else{
        collapsiveMenu.style.maxHeight = '0px';
        collapsiveMenu.style.overflow = 'hidden';
    }
});
