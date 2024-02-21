




function reversedChars(firstChar, secondChar, thirdChar) {
    let text = firstChar + secondChar + thirdChar;

    console.log(text.split('').reverse().join(' '));
}

reversedChars('a', 'b', 'c'); // c b a
