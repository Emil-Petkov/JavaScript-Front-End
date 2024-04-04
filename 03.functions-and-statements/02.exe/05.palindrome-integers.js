function solve(numbers) {
    let checkList = numbers.map(number => {
        let numberToString = number.toString();
        let isPalindrome = numberToString === numberToString.split('').reverse().join('');
        return isPalindrome;
    });

    return checkList.join('\n');
}

console.log(solve([123, 323, 421, 121]));



//////////////////////////////////////////////////////////

function solve(numbers) {
    let isPalindrome = false;
    let checkList = [];

    while (numbers.length > 0) {
        let firstNumber = numbers[0];
        let numberToString = firstNumber.toString();

        if (numberToString[0] === numberToString[numberToString.length - 1]) {
            isPalindrome = true;
            checkList.push(isPalindrome);
        } else {
            isPalindrome = false;
            checkList.push(isPalindrome);
        }

        numbers.shift();
    }

    return checkList.join('\n');

};

console.log(solve([123, 323, 421, 121]));