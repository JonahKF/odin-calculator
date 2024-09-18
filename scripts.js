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

//Initialize Variables
let num1
let num2
let operator

const displayText = document.querySelector("#display-text");


//Button Functionality & Listeners
const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("1");
    displayText.textContent = text;
});

const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("2");
    displayText.textContent = text;
});

const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("3");
    displayText.textContent = text;
});

const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("4");
    displayText.textContent = text;
});

const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("5");
    displayText.textContent = text;
});

const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("6");
    displayText.textContent = text;
});

const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("7");
    displayText.textContent = text;
});

const btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("8");
    displayText.textContent = text;
});

const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("9");
    displayText.textContent = text;
});

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => {
    let text = displayText.textContent;
    text = text.concat("0");
    displayText.textContent = text;
});

const btnPlus = document.querySelector("#addition");
btnPlus.addEventListener("click", () => {
    displayText.textContent = "+";
});

const btnMinus = document.querySelector("#subtraction");
btnMinus.addEventListener("click", () => {
    displayText.textContent = "-";
});

const btnMultiply = document.querySelector("#multiplication");
btnMultiply.addEventListener("click", () => {
    displayText.textContent = "x";
});

const btnDivide = document.querySelector("#division");
btnDivide.addEventListener("click", () => {
    displayText.textContent = "÷";
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    displayText.textContent = "";
});