function printAndSum(firstNumber, secondNumber) {
    let sum = 0
    let numbersAsString = ''

    let start = firstNumber
    let end = secondNumber

    for (let num = start; num <= end; num++) {
        numbersAsString += num.toString();
        sum += num;

        if(num < secondNumber){
            numbersAsString += ' ';
        }
    }

    console.log(numbersAsString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10); //45
printAndSum(0, 26); //351
printAndSum(50, 60); //605