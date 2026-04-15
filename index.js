const add = (num1, num2) => Number(num1) + Number(num2);
const subtract = (num1, num2) => Number(num1) - Number(num2);
const divide = (num1, num2) => Number(num1) / Number(num2);
const multiply = (num1, num2) => Number(num1) * Number(num2);

const operate = function(operator, num1, num2) {
    const a = Number(num1);
    const b = Number(num2);

    switch (operator) {
        case '+': 
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            if (b === 0) {
                return "Nice try, buster! No dividing by zero.";
            }
            return divide(a,b);
        default:
            return null;
    }
}

let currentOperator = "";
let num1 = "";
let num2 = "";

const display = document.querySelector("#display-text");
const calcButtonsContainer = document.querySelector(".calc-buttons-container");

calcButtonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const clickedButton = e.target;
    console.log(clickedButton);
    const buttonText = clickedButton.textContent;
    const buttonType = clickedButton.className;

    if (buttonType === 'number') {
        handleNumber(buttonText);
    } else if (buttonType === 'operator') {
        handleOperator(buttonText);
    }
});
