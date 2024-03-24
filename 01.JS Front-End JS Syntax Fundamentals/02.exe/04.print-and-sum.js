function solve(start, end) {
    let numbers = []
    let sum = 0;

    for (let s = start; s <= end; s++) {
        numbers.push(s);
        sum += s;
    }

    //     return {
    //         number: numbers.join(' '),
    //         totalSum: `Sum: ${sum}`
    //     };
    // }

    // const result = solve(50, 60);

    // console.log(result.number);
    // console.log(result.totalSum);
    
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);

}

solve(5, 10);

