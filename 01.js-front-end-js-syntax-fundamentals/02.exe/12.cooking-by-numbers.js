function solve(number, op1, op2, op3, op4, op5) {
    let num = Number(number);

    const commands = [op1, op2, op3, op4, op5];

    for (const command of commands) {
        switch (command) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= num * 0.20;
                break;
        }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


// function cookingByNumbers(number, op1, op2, op3, op4, op5) {
//     const operations = {
//       chop: (x) => x / 2,
//       dice: (x) => Math.sqrt(x),
//       spice: (x) => x + 1,
//       bake: (x) => x * 3,
//       fillet: (x) => x * 0.8,
//     };
  
//     let result = Number(number);
  
//     [op1, op2, op3, op4, op5].forEach((operation) => {
//       if (operations[operation]) {
//         result = operations[operation](result);
//         console.log(result);
//       }
//     });
//   }