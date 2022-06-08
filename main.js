const menuBtn = document.querySelector('.menu-btn')
const navlnks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlnks.classList.toggle('mobile-menu')
})