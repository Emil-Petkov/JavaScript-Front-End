function solve(sentence, censoredWord) {
    const regex = new RegExp(censoredWord, 'g');
    const replacement = '*'.repeat(censoredWord.length);
    return sentence.replace(regex, replacement);
}

console.log(solve('A small sentence with some words', 'small'));