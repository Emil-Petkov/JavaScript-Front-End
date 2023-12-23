function circleArea(radius) {
  if (typeof radius === 'number') {
    let result = Math.PI * radius ** 2;

    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof radius}.`
    );
  }
}

circleArea(5);
//78.54

circleArea('aaa');
//We can not calculate the circle area, because we receive a string.
