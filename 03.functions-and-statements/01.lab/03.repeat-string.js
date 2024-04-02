function solve(text, nRepeat) {
    let result = '';

    for (let i = 0; i < nRepeat; i++) {
        result += text;
    }

    return result;
};

console.log(solve("abc", 3));