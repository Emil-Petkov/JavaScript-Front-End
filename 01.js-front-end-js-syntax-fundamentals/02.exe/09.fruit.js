function fruit(typeFruit, weightInGrams, pricePerKilogram) {
    let gramsToKilograms = weightInGrams / 1000;
    let sum = gramsToKilograms * pricePerKilogram;

    return `I need $${sum.toFixed(2)} to buy ${gramsToKilograms.toFixed(2)} kilograms ${typeFruit}.`;
}

console.log(fruit('orange', 2500, 1.80));