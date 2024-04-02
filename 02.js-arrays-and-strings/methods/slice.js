let fruits = ['orange', 'apple', 'lemon', 'banana'];
console.log(fruits); // ['orange', 'apple', 'lemon', 'banana']

let removeElements = fruits.slice(1, 3); // slice(start index, index-1) -> remove index 1 and 2
console.log(removeElements); //['apple', 'lemon']

let copyArray = fruits.slice(); // without position in slice will be create copy of the original Array
console.log(copyArray); //['orange', 'apple', 'lemon', 'banana']
