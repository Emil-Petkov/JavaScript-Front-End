function solve(numbers, nRotations) {
    for (let i = 0; i < nRotations; i++) {
        let firstNumber = numbers.shift();
        numbers.push(firstNumber);
    }

    return numbers.join(' ');
}

console.log(solve([51, 47, 32, 61, 21], 2));