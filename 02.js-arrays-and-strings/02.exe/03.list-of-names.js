function solve(names) {

    let sortedNames = names.sort();

    let result = sortedNames.map((name, index) => `${index + 1}.${name}`);

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));



/////////////////////////////////////////////////////////////////////////

function solve(names) {

    names.sort((a, b) => a.localeCompare(b));
    return names.map((name, index) => `${index + 1}.${name}`).join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));