let txt = 'Peter: 123 Mark: 456';
let replacement = '999';

const reg = new RegExp('\\d{3}', 'g');

let result = txt.replace(reg, replacement);

console.log(result); //Peter: 999 Mark: 999
