function sameNumbers(number) {
    let stringOfNumbers = number.toString().split('');
    let sumOfDigits = 0;
    let checkNumber = true;
    let firstDigit = stringOfNumbers[0];

    for (const digit of stringOfNumbers) {
        sumOfDigits += Number(digit);

        if (digit !== firstDigit) {
            checkNumber = false;
        }
    }

    return `${checkNumber}\n${sumOfDigits}`
}

console.log(sameNumbers(1234));