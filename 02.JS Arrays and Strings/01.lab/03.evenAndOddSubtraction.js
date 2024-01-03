function evenAndOddSubtraction(numbers) {
  let sumOfEvenNumbers = 0;
  let sumOfOddNumbers = 0;

  for (const num of numbers) {
    if (num % 2 == 0) {
      sumOfEvenNumbers += num;
    } else {
      sumOfOddNumbers += num;
    }
  }

  return sumOfEvenNumbers - sumOfOddNumbers;
}

console.log(evenAndOddSubtraction([3, 5, 7, 9]));
