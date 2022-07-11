var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('counter').addEventListener("click", increment(), true);
document.getElementById('counter').addEventListener("click", decrement(), true);

/* Contador (0 a 10) 
function increment() {
    if(currentNumber < 10 && currentNumber >= 0) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber < 10 && currentNumber >= 1) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
} */

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

if(currentNumber >= 0) {
    document.getElementById('currentNumber').style.color = 'green';
} else {
    document.getElementById('currentNumber').style.color = 'red';
}