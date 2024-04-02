function solve(text, startIndex, endIndex) {
    let result = '';

    for (let i = startIndex; i <= endIndex; i++) {
        result += text[i];
    }

    return result;
}

console.log(solve('SkipWord', 4, 7));


/////////////////////////////////////////////////////

function solve(text, startIndex, endIndex) {
    return text.substring(startIndex, startIndex + endIndex);
}

console.log(solve('SkipWord', 4, 7));