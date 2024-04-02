const regexp = new RegExp('t(e)(st(\\d?))', 'g');
const str = 'test1test2';
const array = [...str.matchAll(regexp)];

console.log(array[0]); //['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', groups: undefined]
 