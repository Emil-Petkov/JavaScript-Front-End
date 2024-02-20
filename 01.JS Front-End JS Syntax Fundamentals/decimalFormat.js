

function averageGrade(grade) {
  return grade.toFixed(2);
}

let result = averageGrade(3.496683);

console.log(result);
//3.50

////////////////////////////////////////////////

let grade = 5.996;

console.log(grade.toFixed(2));
// 6.00

////////////////////////////////////////////////

function aaa(num) {
  return Math.ceil(num);
}

let result = aaa(5.1111111111);

console.log(result);
//6

////////////////////////////////////////////////

function aaa(num) {
  return Math.floor(num);
}

let result = aaa(5.999999);

console.log(result);
//5

///////////////////////////////////////////////

function aaa(num) {
  return Math.round(num);
}

let result = aaa(5.4555);

console.log(result);
//5
