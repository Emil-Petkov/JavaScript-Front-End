function solve(startSymbol, endSymbol) {
    let result = [];

    let startINdex = startSymbol.charCodeAt();
    let endINdex = endSymbol.charCodeAt();

    if (startINdex < endINdex) {
        for (let i = startINdex + 1; i <= endINdex - 1; i++) {
            result.push(String.fromCharCode(i));
        }

    } else {
        for (let i = endINdex + 1; i <= startINdex - 1; i++) {
            result.push(String.fromCharCode(i));
        }
    }

    return result.join(' ');
};

console.log(solve('C', '#'));