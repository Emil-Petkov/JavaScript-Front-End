function solve(text) {
    
    let regex = new RegExp('\\#[A-Za-z]+', 'g');
    let matches = text.match(regex);

    if (matches) {
        let result = matches.map(match => match.substring(1));

        return result.join('\n');
    }
}

console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));