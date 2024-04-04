










function solve(n) {
    let result = [];

    let numberAsString = String(n);
    let line = numberAsString.repeat(n);

    let spacedLine = [...line].join(' ');

    for (let i = 0; i < n; i++) {
        result.push(spacedLine);
    }

    return result.join('\n');
};

console.log(solve(3));

////////////////////////////////////////////////

function solve (n) {
    for (let i = 0; i < n; i++) {
        row_nums = Array(n).fill(n)
        console.log(row_nums.join(' '))
    }
};

solve(3);
