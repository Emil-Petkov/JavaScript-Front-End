function solve(product, quantity) {

    const price = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    if (price[product]) {
        let totalPrice = quantity * price[product];

        return totalPrice.toFixed(2);
    }

};

console.log(solve("coffee", 2));