let animals = ['monkey', 'donkey', 'crocodile', 'giraffe', 'donkey'];

//indexOf -> takes two arguments searchElement and fromIndex by default starts from index 0
//returns the index of the first element found

console.log(animals.indexOf('monkey')); //0-> index 0
console.log(animals.indexOf('donkey')); //1-> index 1
console.log(animals.indexOf('donkey', 2)); //4-> it finds the donkey at index 4 because it is told to start at index 2, which is after the first donkey
console.log(animals.indexOf('dog')); // -1 -> undefined animal in the array return result -1
