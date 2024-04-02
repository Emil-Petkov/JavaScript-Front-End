function solve(sentence, searchWord) {

    const regex = new RegExp('\\b' + searchWord + '\\b', 'g');
    const matches = sentence.match(regex);

    return matches ? matches.length : 0;
}

console.log(solve('This is a word and it also is a sentence', 'is'));