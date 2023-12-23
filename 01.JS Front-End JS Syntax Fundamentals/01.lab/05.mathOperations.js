function calculate(numOne, numTwo, operator) {
  switch (operator) {
    case '+':
      console.log(numOne + numTwo);
      break

    case '-':
      console.log(numOne - numTwo);
      break

    case '*':
      console.log(numOne * numTwo);
      break

    case '/':
      console.log(numOne / numTwo);
      break

    case '%':
      console.log(numOne % numTwo);
      break

    case '**':
      console.log(numOne ** numTwo);
      break
  }
}

calculate(3, 5.5, '*');
