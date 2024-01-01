let fruits = ['apple', 'orange', 'kiwi'];

console.log(fruits); //['apple', 'orange', 'kiwi']
console.log(fruits.join()); //apple,orange,kiwi
console.log(fruits.join(', ')); //apple, orange, kiwi
console.log(fruits.join('')); // concatenation -> appleorangekiwi
console.log(fruits.join('_-')); //apple_-orange_-kiwi
console.log(fruits.join('\n')); //new line
console.log(['kiwi'].join('!@#$%^&*')); //kiwi -> if in array have only one element he ignored the join
