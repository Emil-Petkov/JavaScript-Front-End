function solve(firstNumber, secondNumber, operation) {
    const operator = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
    };

    if (operation) {
        return operator[operation](firstNumber, secondNumber);
    }
};

console.log(solve(5, 5, 'multiply'));