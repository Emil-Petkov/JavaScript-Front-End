function solve(number) {

    let calculateSymbols = '%'.repeat(number / 10);
    let calculateSpots = '.'.repeat(10 - number / 10);


    if (number < 100) {
        return `${number}% [${calculateSymbols}${calculateSpots}]\nStill loading...`;
    } else {
        return `100% Complete!`;
    }
}

console.log(solve(30));
ø