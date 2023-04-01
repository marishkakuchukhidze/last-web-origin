let counter = 0

setInterval( () => {
    counter++;
    if(counter > 2){
        counter = 0;
    }
const inputs = document.querySelectorAll('input[name=slider]');
inputs[counter].checked=true;
}, 2000);





