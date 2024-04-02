function solve(firstNUmber, secondNumber, thirdNumber) {
    let result = firstNUmber * secondNumber * thirdNumber;

    if (result > 0) {
        return 'Positive';

    } else {
        return 'Negative';

    }

};

console.log(solve(5, 12, -15));