const form = document.querySelector('form');

console.log(localStorage);

const mail = localStorage.getItem('email');
console.log(mail);
if (mail) {
    // localStorage.removeItem('email');
}
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.querySelector('input').value);
    });
}

