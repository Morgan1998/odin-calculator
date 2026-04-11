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