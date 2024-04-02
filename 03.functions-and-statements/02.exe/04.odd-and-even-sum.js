function solve(number) {
    let sumOfEvenDigits = 0;
    let sumOfOddDigits = 0;

    let splitDigits = number.toString().split('');

    for (let digit of splitDigits) {
        let currentDigit = Number(digit);

        if (currentDigit % 2 === 0) {
            sumOfEvenDigits += currentDigit;
        } else {
            sumOfOddDigits += currentDigit;
        }
    }

    return `Odd sum = ${sumOfOddDigits}, Even sum = ${sumOfEvenDigits}`;
};

console.log(solve(3495892137259234));