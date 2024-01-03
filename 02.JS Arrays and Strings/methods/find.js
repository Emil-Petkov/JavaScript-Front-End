let numbers = [1, 2, 3, 4, 5, 61, 7, 811, 9123132, 10];

let found = numbers.find(function (num) {
  return num > 23;
});

console.log(found); //61 -> returns the first element that matches the condition

//[1, 2, 3, 4, 5, 11, 7, 8, 9, 10]
//console.log(found); //undefined -> if none returns undefined
