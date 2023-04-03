const h1 = document.querySelector('h1');
console.log(localStorage);
const mail = localStorage.getItem('email');
console.log(mail);

if (mail) {
    h1.textContent = mail;
}