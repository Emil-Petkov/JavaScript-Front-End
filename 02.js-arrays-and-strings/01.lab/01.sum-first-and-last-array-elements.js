function solve(numbers) {

    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length - 1];

    return firstNumber + lastNumber;
}

console.log(solve([20, 30, 40]));