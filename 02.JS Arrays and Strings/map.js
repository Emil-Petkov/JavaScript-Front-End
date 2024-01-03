let numbers = [1, 4, 9];

let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

console.log(roots); //[1, 2, 3]

//////////////////////////////////////////

let animals = ['dog', 'cat', 'mouse'];

// let star = animals.map(() => '*'); //['*', '*', '*']

let star = animals.map((animal) => `*${animal}*`); //['*dog*', '*cat*', '*mouse*']

// let star = animals.map(function (a) {
//   return '*';  //['*', '*', '*']
// });

console.log(animals);
console.log(star);

let greetings = ['Hello', 'there', 'my friends'];

let upper = greetings.map((str) => str.toUpperCase()); //['HELLO', 'THERE', 'MY FRIENDS']

console.log(upper);
