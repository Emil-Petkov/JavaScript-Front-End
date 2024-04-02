let numbers = [11, 22, 33, 44, 55, 66, 77];
console.log(numbers);

numbers.splice(1, 0, 2); // added 2 on index 1 -> [11, 2, 22, 33, 44, 55, 66, 77]
console.log(numbers);

numbers.splice(5, 1, 111); // replace index 5 with 111 ->[11, 2, 22, 33, 44, 111, 66, 77]
console.log(numbers);

let el = numbers.splice(2, 3); // [11, 2, 22, 33, 44, 111, 66, 77] remove element on index 2, 3, 4 and return it
console.log(el); //[22, 33, 44]


let num = [11, 22, 33, 44, 55, 66, 77];

console.log(num); //[11, 22, 33, 44, 55, 66, 77]
num.splice(-3); // removed last 3 elements in the array
console.log(num); //[11, 22, 33, 44]
