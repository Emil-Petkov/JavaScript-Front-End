function sameNumbers(digits) {
  let digitInSrting = digits.toString();
  let isAllSame = true;
  let sumOfDigits = 0;

  for (let i = 0; i < digitInSrting.length; i++) {
    sumOfDigits += parseInt(digitInSrting[i]);

    if (digitInSrting[i] !== digitInSrting[0]) {
      isAllSame = false;
    }
  }

  if (isAllSame) {
    console.log('true');
  } else {
    console.log('false');
  }

  console.log(sumOfDigits);
}

sameNumbers(2222222);
