let txt = 'Peter: 123 Mark: 456';
let reg = new RegExp('[A-Z][a-z]+: \\d+', 'g');
let matches = txt.match(reg);

console.log(matches); //['Peter: 123', 'Mark: 456']
console.log(matches.length); //2
console.log(matches[0]); //Peter: 123
console.log(matches[1]); //Mark: 456
