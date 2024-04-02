function solve(n, numbers) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(numbers[i]);
    }

    return result.reverse().join(' ');;
}

console.log(solve(3, [10, 20, 30, 40, 50]));