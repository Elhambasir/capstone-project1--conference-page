window.addEventListener(('resize'), () => {
    change();
});
window.addEventListener(('load'), () => {
    change();
});

const navbar = document.querySelector('.navbar');
const mininav = document.querySelector('.mini-nav');
function change() {
    if (window.screen.width > 768) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-lg-white');
        navbar.classList.add('shadow-sm');
        mininav.classList.remove('d-none');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-lg-white');
        navbar.classList.remove('shadow-sm');
        mininav.classList.add('d-none');
    }
}