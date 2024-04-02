function solve(grade) {
    switch (true) {
        case grade < 3.00:
            return `Fail (${Math.floor(grade)})`;

        case grade < 3.50:
            return `Poor (${grade.toFixed(2)})`

        case grade < 4.50:
            return `Good (${grade.toFixed(2)})`

        case grade < 5.50:
            return `Very good (${grade.toFixed(2)})`

        case grade <= 6.00:
            return `Excellent (${grade.toFixed(2)})`

    }
}

console.log(solve(2.99));