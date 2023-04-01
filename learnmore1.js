const hamButton = document.querySelector("#ham-menu");
const label = document.querySelector("label");
const overlayGreen = document.querySelector(".full-page-green");
const hamMenu = document.querySelector(".ham-menu");
const links = hamMenu.querySelectorAll('a')


hamButton.addEventListener('click', () => {
    label.classList.toggle('open');
    overlayGreen.classList.toggle('full-page-green-open');
    hamMenu.classList.toggle('ham-menu-open');
})


links.forEach(link => {
    link.addEventListener('click', () => {
        label.classList.remove('open');
        overlayGreen.classList.remove('full-page-green-open');
        hamMenu.classList.remove('ham-menu-open');
    })
})