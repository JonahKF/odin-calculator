//Basic Math Functions
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

//Initialize Variables
let num1
let num2
let operator

function operate (num1, num2, operator) {
    if(operator === "+") {
        add(num1, num2);
    }
    else if(operator === "-") {
        subtract(num1, num2);
    }
    else if(operator === "*") {
        multiply(num1, num2);
    }
    else if(operator === "/") {
        divide(num1, num2);
    }
}

//Button Functionality & Listeners
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
