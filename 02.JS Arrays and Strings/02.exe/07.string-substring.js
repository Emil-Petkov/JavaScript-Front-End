function solve(searchWord, text) {
    let words = text.split(' ');

    let lowerCaseSearchWord = searchWord.toLowerCase();

    let found = words.some(word => word.toLowerCase() === lowerCaseSearchWord);

    return found ? searchWord : `${searchWord} not found!`;
}

console.log(solve('abc', 'JavaScript is the best programming language'));
