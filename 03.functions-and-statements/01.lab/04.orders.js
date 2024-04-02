function solve(product, quantity) {
    let totalPrice = 0;

    const price = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    }

    switch (product) {
        case 'coffee':
            totalPrice += quantity * price.coffee;
            break;

        case 'water':
            totalPrice += quantity * price.water;
            break;

        case 'coke':
            totalPrice += quantity * price.coke;
            break;

        case 'snacks':
            totalPrice += quantity * price.snacks;
            break;
    }

    return totalPrice.toFixed(2);

};

console.log(solve("coffee", 2));