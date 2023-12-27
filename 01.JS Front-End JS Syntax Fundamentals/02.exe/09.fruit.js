function fruit(typeOfFruit, grams, price) {
    let convertGramsToKg = (grams / 1000);
    let neededMoney = convertGramsToKg * price

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${convertGramsToKg.toFixed(2)} kilograms ${typeOfFruit}.`)
}

fruit('apple', 1563, 2.35);
