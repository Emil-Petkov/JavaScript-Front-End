function solve(char, nSteps) {
    let result = [];

    for (let i = 0; i < char.length; i += nSteps) {

        result.push(char[i]);
    }


    return result;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));