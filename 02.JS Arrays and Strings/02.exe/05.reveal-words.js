function solve(words, sentence) {
    let wordsList = words.split(', ');

    for (const word of wordsList) {

        let regex = new RegExp('\\*{' + word.length + '}');

        if (sentence.match(regex)) {
            sentence = sentence.replace(regex, word);
        }
    }

    return sentence;
}

console.log(solve('great, learning', 'softuni is ***** place for ******** new programming languages'));