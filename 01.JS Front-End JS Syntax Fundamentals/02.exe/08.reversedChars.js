function reversedChars(fCh, sCh, tCh) {
  let characterArray = [fCh, sCh, tCh];
  let reversedCharacters = characterArray.reverse();
  let result = reversedCharacters.join(' ');

  console.log(result);
}

reversedChars('A', 'B', 'C');
