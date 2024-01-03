function censoredWords(text, hiddenWord) {
  let lengthWord = hiddenWord.length;
  let replacement = '*'.repeat(lengthWord);
  let regex = new RegExp(hiddenWord, 'g');

  return text.replace(regex, replacement);
}

console.log(censoredWords('aaaaaaaa small small aaaaaaa small', 'small')); //aaaaaaaa ***** ***** aaaaaaa *****

////////////////////////////////////////////////////////////////

function censoredWords(text, hiddenWord) {
  let result = text;

  while (result.includes(hiddenWord)) {
    result = result.replace(hiddenWord, '*'.repeat(hiddenWord.length));
  }
  return result;
}

console.log(censoredWords('aaaaaaaa small small aaaaaaa small', 'small')); ////aaaaaaaa ***** ***** aaaaaaa *****
