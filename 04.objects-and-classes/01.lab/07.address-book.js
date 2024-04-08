function solve(array) {
    const result = {};

    for (const el of array) {
        const [name, address] = el.split(':');

        if (!result.hasOwnProperty(name)) {
            result[name] = address;
        } else {
            result[name] = address;
        }
    }

    const sortedNames = Object.keys(result).sort();

    sortedNames.forEach(name => {
        console.log(`${name} -> ${result[name]}`);
    });
}

solve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);