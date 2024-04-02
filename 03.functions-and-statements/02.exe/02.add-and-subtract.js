function calculate(firstNUmber, secondNUmber, thirdNUmber) {

    function addNUmbers(firstNUmber, secondNUmber) {
        return firstNUmber + secondNUmber;
    }

    function subtractNUmbers(sum, thirdNUmber) {
        return sum - thirdNUmber;
    }

    const sum = addNUmbers(firstNUmber, secondNUmber);

    return subtractNUmbers(sum, thirdNUmber);
};

console.log(calculate(23, 6, 10));