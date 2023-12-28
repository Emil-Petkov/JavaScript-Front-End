function cookingByNumbers(number, op1, op2, op3, op4, op5) {
    const operations = {
      chop: (x) => x / 2,
      dice: (x) => Math.sqrt(x),
      spice: (x) => x + 1,
      bake: (x) => x * 3,
      fillet: (x) => x * 0.8,
    };
  
    let result = Number(number);
  
    [op1, op2, op3, op4, op5].forEach((operation) => {
      if (operations[operation]) {
        result = operations[operation](result);
        console.log(result);
      }
    });
  }
  