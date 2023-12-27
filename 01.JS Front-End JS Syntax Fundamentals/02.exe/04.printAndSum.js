function printAndSum(firstNum, lastNum) {
  let sumNumbers = 0;
  let numberString = '';

  for (let num = firstNum; num <= lastNum; num++) {
    sumNumbers += num;
    numberString += num + ' ';
  }

  console.log(numberString);
  console.log(`Sum: ${sumNumbers}`);
}

printAndSum(50, 60);
