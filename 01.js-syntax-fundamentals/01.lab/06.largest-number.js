function solve(numOne, numTwo, numThree) {
    let maxNumber = Math.max(numOne, numTwo, numThree);

    return `The largest number is ${maxNumber}.`
}

console.log(solve(1, 2, 3));