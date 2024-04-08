function solve(jasonObj) {

    const obj = JSON.parse(jasonObj);
    for (const el of Object.entries(obj)) {
        const [key, value] = el;

        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');