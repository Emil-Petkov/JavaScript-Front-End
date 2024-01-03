function aaa(...arguments) {
  console.log(arguments.length);
  console.log(arguments);
}

aaa(1, 2, 3); // 3 -> [1, 2, 3]
aaa(1, 2); // 2 -> [1, 2]
aaa(); // 0 -> []
