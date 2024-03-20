


function countStringOccurrences(sentence, sub) {
  let words = sentence.split(' ');
  let counter = 0;

  for (let word of words) {
    if (word === sub) {
      counter++;
    }
  }

  return counter;
}

console.log(
  countStringOccurrences('This is a word and it also is a sentence', 'is')
);

///////////////////////////////////////////////////////

function countStringOccurrences(sentence, sub) {
    let counter = 0;
    let regex = new RegExp(`\\b${sub}\\b`, 'g');
  
    let match = regex.exec(sentence);
    while (match) {
      counter++;
      match = regex.exec(sentence);
    }
  
    return counter;
  }
  
  console.log(
    countStringOccurrences('This is a word and it also is a sentence', 'is')
  );
  
