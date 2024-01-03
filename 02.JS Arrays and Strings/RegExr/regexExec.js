let txt = 'Peter: 123 Mark: 456';
let reg = new RegExp('([A-Z][a-z]+): (\\d+)', 'g');
let matches = reg.exec(txt);

console.log(matches.length); //3
console.log(matches[0]); //Peter: 123
console.log(matches[1]); //Peter
console.log(matches[2]); //123
