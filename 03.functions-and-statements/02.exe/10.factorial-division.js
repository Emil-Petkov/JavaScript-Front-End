function solve(number, divisor) {
    function factorial(n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    let factorialResult = factorial(number);
    
    console.log((factorialResult / divisor).toFixed(2));
}

solve(6, 2);
