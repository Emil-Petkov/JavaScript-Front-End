let numbers = [1, 2, 3, 4, 5, 61, 7, 811, 9123132, 10];

let found = numbers.filter(function (num) {
  return num > 23; //the filter returns all numbers matching the condition in an array
});

console.log(found); //[61, 811, 9123132]
