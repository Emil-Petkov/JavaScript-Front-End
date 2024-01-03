let text = 'I have a problem';

console.log(text.split()); //['I have a problem']
console.log(text.split('')); //['I', ' ', 'h', 'a', 'v', 'e', ' ', 'a', ' ', 'p', 'r', 'o', 'b', 'l', 'e', 'm']
console.log(text.split(' ')); //['I', 'have', 'a', 'problem']
console.log(text.split('----')); //['I have a problem']

let txt = 'aaa - bbb, ccc';
console.log(txt.split(' - ')); //['aaa', 'bbb ccc']
console.log(txt.split(', ')); //['aaa - bbb', 'ccc']
