const items = ['item1', 'item2', 'item3'];

// Създаваме празен масив copy
const copy = [];

const callbackFn = function (item) {
  copy.push(item);
};

// Използваме forEach за да обходим items и да извикаме callbackFn за всеки елемент
items.forEach(callbackFn);

// Сега copy съдържа копие на елементите от items
console.log(copy); // ["item1", "item2", "item3"]
