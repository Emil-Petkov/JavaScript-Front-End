function solve(numOne, numTwo, operator){
    switch(operator){
        case '+':
            return numOne + numTwo;
        case '-':
            return numOne - numTwo;
        case '*':
            return numOne * numTwo;
        case '/':
            return numOne / numTwo;
        case '%':
            return numOne % numTwo;
        case '**':
            return Math.pow(numOne, numTwo);
    }
}

console.log(solve(3, 5.5, '*'));