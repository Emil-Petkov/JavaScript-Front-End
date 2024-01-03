// const reg = /[A-Za-z0-9]+/g;

// const regex = new RegExp('[A-Za-z0-9]+', 'g');

let text = 'Today is 2014-03-01';
const regex = new RegExp('\\d{4}-\\d{2}-\\d{2}', 'g');

let validDate = regex.test(text); //true or false

console.log(validDate);
