function solve(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenSum += numbers[i];
        } else {
            oddSum += numbers[i];
        }
    }
    return evenSum - oddSum;
}

console.log(solve([1, 2, 3, 4, 5, 6]));