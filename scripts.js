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
        let result = add(num1, num2);
        return result;
    }
    else if(operator === "-") {
        let result = subtract(num1, num2);
        return result;
    }
    else if(operator === "*") {
        let result = multiply(num1, num2);
        return result;
    }
    else if(operator === "/") {
        let result = divide(num1, num2);
        return result;
    }
}

//Initialize Variables
let displayVar = "";
let num1 = "blank";
let num2 = "blank";
let operator = "";

const displayText = document.querySelector("#display-text");


//Button Functionality & Listeners
const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(1);
    displayText.textContent = text;
    displayVar += "1";
});

const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(2);
    displayText.textContent = text;
    displayVar += "2";
});

const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(3);
    displayText.textContent = text;
    displayVar += "3";
});

const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(4);
    displayText.textContent = text;
    displayVar += "4";
});

const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(5);
    displayText.textContent = text;
    displayVar += "5";
});

const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(6);
    displayText.textContent = text;
    displayVar += "6";
});

const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(7);
    displayText.textContent = text;
    displayVar += "7";
});

const btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(8);
    displayText.textContent = text;
    displayVar += "8";
});

const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => {
    if(displayVar === "0" || displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
    let text = displayText.textContent;
    text = text.concat(9);
    displayText.textContent = text;
    displayVar += "9";
});

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => {
    if(displayVar !== "0"){
        let text = displayText.textContent;
        text = text.concat(0);
        displayText.textContent = text;
        displayVar += "0";
    }
    else if(displayVar === "+" || displayVar === "-" || displayVar === "x" || displayVar === "÷"){
        displayText.textContent = "";
        displayVar = "";
    }
});


const btnPlus = document.querySelector("#addition");
btnPlus.addEventListener("click", () => {
    displayText.textContent = "+";
    if(num1 === "blank"){
        num1 = Number(displayVar);
        displayVar = "+";
        operator = "+";
    }
    else if(num2 === 0){

    }
});

const btnMinus = document.querySelector("#subtraction");
btnMinus.addEventListener("click", () => {
    displayText.textContent = "-";
    if(num1 === "blank"){
        num1 = Number(displayVar);
        displayVar = "-";
        operator = "-";
    }
});

const btnMultiply = document.querySelector("#multiplication");
btnMultiply.addEventListener("click", () => {
    displayText.textContent = "x";
    if(num1 === "blank"){
        num1 = Number(displayVar);
        displayVar = "x";
        operator = "*";
    }
});

const btnDivide = document.querySelector("#division");
btnDivide.addEventListener("click", () => {
    displayText.textContent = "÷";
    if(num1 === "blank"){
        num1 = Number(displayVar);
        displayVar = "÷";
        operator = "/";
    }
});

const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    if(num1 !== "blank"){
        num2 = Number(displayVar);
        result = operate(num1, num2, operator);
        console.log("num1 is " + num1);
        console.log("num2 is " + num2);
        console.log("Result is " + result);
        displayText.textContent = result;
    }
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    displayText.textContent = "";
    displayVar = "";
});