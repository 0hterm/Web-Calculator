let displayValue = document.getElementById('display-value');

const addToStartValue = (val) => {
    displayValue.innerHTML = val;
};

const enterValue = (val) => {
    if (displayValue.innerHTML === '0') {
        addToStartValue(val);
    }
    else {
        if (checkLength()) {
            displayValue.innerHTML += val;
        }
    }
}

const checkLength = () => {
    if (parseFloat(displayValue.innerHTML) > 9999999999999999999999) {
        return false;
    }
    else {
        return true;
    }
}

const clearDisplay = () => {
    displayValue.innerHTML = 0;
}

const backFunc = () => {
    if (displayValue.innerHTML == 0) {
        return
    }

    displayValue.innerHTML.slice(0,-1) == '' ? displayValue.innerHTML = 0 : displayValue.innerHTML = displayValue.innerHTML.slice(0,-1);
}

const debug = () => {
    backFunc();
}

document.getElementById('1').addEventListener('click', function() {
    enterValue(1);
});

document.getElementById('2').addEventListener('click', function() {
    enterValue(2);
});

document.getElementById('3').addEventListener('click', function() {
    enterValue(3);
});

document.getElementById('4').addEventListener('click', function() {
    enterValue(4);
});

document.getElementById('5').addEventListener('click', function() {
    enterValue(5);
});

document.getElementById('6').addEventListener('click', function() {
    enterValue(6);
});

document.getElementById('7').addEventListener('click', function() {
    enterValue(7);
});

document.getElementById('8').addEventListener('click', function() {
    enterValue(8);
});

document.getElementById('9').addEventListener('click', function() {
    enterValue(9);
});
document.getElementById('0').addEventListener('click', function() {
    enterValue(0);
});

let tmp = 0;
let lastFunc;
let chaining = false;

const addFunc = () => {
    let currDisplay = parseFloat(displayValue.innerHTML);
    tmp =  chaining ? eqFunc(lastFunc) : currDisplay;
    displayValue.innerHTML = 0;
    lastFunc = '+';
    chaining = true;
}

const subFunc = () => {
    let currDisplay = parseFloat(displayValue.innerHTML);
    tmp =  chaining ? eqFunc(lastFunc) : currDisplay;    displayValue.innerHTML = 0;
    lastFunc = '-';
    chaining = true;
}

const mulFunc = () => {
    let currDisplay = parseFloat(displayValue.innerHTML);
    tmp =  chaining ? eqFunc(lastFunc) : currDisplay;    displayValue.innerHTML = 0;
    lastFunc = '*';
    chaining = true;
}

const divFunc = () => {
    let currDisplay = parseFloat(displayValue.innerHTML);
    tmp =  chaining ? eqFunc(lastFunc) : currDisplay;    displayValue.innerHTML = 0;
    lastFunc = '/';
    chaining = true;
}

const eqFunc = (op) => {
    let val = parseFloat(displayValue.innerHTML);
    switch (op){
        case '+':
            displayValue.innerHTML = val + tmp;
            break;
        case '-':
            displayValue.innerHTML = tmp - val;
            break;
        case '*':
            displayValue.innerHTML = val * tmp;
            break;
        case '/':
            displayValue.innerHTML = tmp / val;
            break;
        default:
            displayValue.innerHTML = displayValue.innerHTML;
            break;
    }
    chaining = false;
    return parseFloat(displayValue.innerHTML);
}

document.getElementById('add').addEventListener('click', addFunc);
document.getElementById('sub').addEventListener('click', subFunc);
document.getElementById('mult').addEventListener('click', mulFunc);
document.getElementById('div').addEventListener('click', divFunc);
document.getElementById('eq').addEventListener('click', function(){
    eqFunc(lastFunc);
});








