function solve(name, lastName, hairColor) {
    const person = { name, lastName, hairColor };

    const objectAsJson = JSON.stringify(person);

    return objectAsJson;
}

console.log(solve('George', 'Jones', 'Brown'));