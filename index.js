const add = (num1, num2) => Number(num1) + Number(num2);
const subtract = (num1, num2) => Number(num1) - Number(num2);
const divide = (num1, num2) => Number(num1) / Number(num2);
const multiply = (num1, num2) => Number(num1) * Number(num2);

let currentOperator = '';
let num1 = '';
let num2 = '';

const display = document.querySelector('#display-content');
const calcButtonsContainer = document.querySelector(".calc-buttons-container");

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
                return 'Nice try, buster! No dividing by zero.';
            }
            return divide(a,b);
        default:
            return null;
    }
}

function handleNumber(num) {
    if (currentOperator === '') {
        num1 += num;
        display.textContent = num1;
    }
    else {
        num2 += num;
        display.textContent = num2;
    }
}

function handleOperator(operator) {
    if (num1 === '') return;
    
    if (num1 !== '' && num2 !== '') {
        num1 = operate(currentOperator, num1, num2).toString();
        display.textContent = num1;
        num2 = '';
    }
    currentOperator = operator;
}

function handleUtility(utility) {
    switch (utility) {
        case 'AC':
            currentOperator = '';
            num1 = '';
            num2 = '';
            display.textContent = '0';
            break;
        case '=':
            if ((currentOperator === '') || (num1 === '') || (num2 === '')) return;
            result = operate(currentOperator, num1, num2);
            display.textContent = result;

            if (typeof result === 'string' && result.includes('Nice try')) {
                num1 = '';
                num2 = '';
                currentOperator = '';
                return;
            }

            num1 = result.toString();
            num2 = '';
            currentOperator = '';
            break;
        default:
            console.log(`Utility "${utility}" clicked, but no logic assigned yet.`);
            break;
    }
}

calcButtonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    console.log(`Current Operator is ${currentOperator}`);
    console.log(`Current num1 is ${num1}`);
    console.log(`Current num2 is ${num2}`);


    const clickedButton = e.target;
    const buttonText = clickedButton.textContent;
    const buttonType = clickedButton.className;

    if (buttonType === 'number') {
        handleNumber(buttonText);
    } else if (buttonType === 'operator') {
        handleOperator(buttonText);
    } else if (buttonType === 'utility') {
        handleUtility(buttonText);
    }
});
