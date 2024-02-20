function mathOperations(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;

        case '-':
            console.log(firstNumber - secondNumber);
            break;

        case '*':
            console.log(firstNumber * secondNumber);
            break;

        case '/':
            console.log(firstNumber / secondNumber);
            break;

        case '%':
            console.log(firstNumber % secondNumber);
            break;

        case '**':
            console.log(firstNumber ** secondNumber);
            break;

    }
}

mathOperations(5, 6, '+') //11