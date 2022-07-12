document.getElementById('adicionar').addEventListener('click', increment, true);
document.getElementById('subtrair').addEventListener('click', decrement, true);

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0) {
        document.getElementById('currentNumber').style.color = 'green';
    } else {
        document.getElementById('currentNumber').style.color = 'red';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0) {
        document.getElementById('currentNumber').style.color = 'green';
    } else {
        document.getElementById('currentNumber').style.color = 'red';
    }
}