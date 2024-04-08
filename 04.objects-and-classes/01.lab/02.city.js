function solve(info) {
    for (const entry of Object.entries(info)) {
        const [key, value] = entry;

        console.log(`${key} -> ${value}`);
    }
}


solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);