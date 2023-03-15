window.addEventListener(('resize'), () => {
    change();
});
window.addEventListener(('load'), () => {
    change();
});

const navbar = document.querySelector('.navbar');
function change() {
    if (window.screen.width > 768) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-lg-white');
        navbar.classList.add('shadow-sm');
        console.log('okkkkk');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-lg-white');
        navbar.classList.remove('shadow-sm');
    }
}