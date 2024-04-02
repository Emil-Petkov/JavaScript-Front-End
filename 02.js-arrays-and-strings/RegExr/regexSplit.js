let text = '1   2  3 4                5';
let regex = new RegExp('\\s+', 'g');
let result = text.split(regex);

console.log(result); //['1', '2', '3', '4', '5']
