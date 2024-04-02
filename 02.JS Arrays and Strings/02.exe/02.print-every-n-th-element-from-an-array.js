function solve(char, nSteps) {
    let result = [];
    let arrayLength = char.length;

    for (let i = 0; i < arrayLength; i += nSteps) {

        result.push(char[i]);
    }


    return result;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));