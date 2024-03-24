function sumDigits(number) {
    let sum = 0;

    for (let digit of number.toString()) {
        sum += parseInt(digit);
    }

    return sum;
}

console.log(sumDigits(543));