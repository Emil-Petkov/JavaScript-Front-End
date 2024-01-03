let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

//includes -> takes two arguments searchElement and fromIndex from which to search to the end of the array
//if fromIndex is empty, starts searching from index 0 by default
console.log(array.includes('a')); //true -> starts searching from index 0 by default
console.log(array.includes('a', 0)); //true -> correct index
console.log(array.includes('e', 4)); //true ->correct index
console.log(array.includes('e', 1)); //true -> starts searching from index 1 to the end of the array
console.log(array.includes('e', 5)); //false -> because it has already passed the index

////////////////////////////////////

// Аlso works with strings

let text = 'ala bala ala bala ala bala';

console.log(text.includes('ala')); //true
console.log(text.includes('hello')); //false
console.log(text.includes('bala')); //true
console.log(text.includes('ala bala')); //true
