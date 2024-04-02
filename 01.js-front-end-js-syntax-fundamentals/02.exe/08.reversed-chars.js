function reversedCharacters(...symbols) {
    let array = [];

    for (const symbol of symbols) {
        array.push(symbol);
    }

    array.reverse();

    return array.join(' ');
}

console.log(reversedCharacters('a', 'b', 'c'));