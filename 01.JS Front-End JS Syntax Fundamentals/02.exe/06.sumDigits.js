function sumDigits(numberInString) {
  let sumOfDigits = 0;

  numberInString = numberInString.toString();

  for (let i = 0; i < numberInString.length; i++) {
    sumOfDigits += parseInt(numberInString[i]);
  }
  console.log(sumOfDigits);
}

sumDigits(245678);
