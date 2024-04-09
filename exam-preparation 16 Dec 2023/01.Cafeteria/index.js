function solve(input) {
    const baristas = {};

    function createBarista(name, shift, coffeeTypes) {
        const coffeeSkills = new Set(coffeeTypes.split(','));
        return { name, shift, coffeeSkills };
    }

    function updateShift(name, newShift) {
        baristas[name].shift = newShift;
        console.log(`${name} has updated his shift to: ${newShift}`);
    }

    function learnNewCoffee(name, newCoffeeType) {
        if (baristas[name].coffeeSkills.has(newCoffeeType)) {
            console.log(`${name} knows how to make ${newCoffeeType}.`);
        } else {
            baristas[name].coffeeSkills.add(newCoffeeType);
            console.log(
                `${name} has learned a new coffee type: ${newCoffeeType}.`
            );
        }
    }

    function prepareCoffee(name, requestedShift, coffeeType) {
        if (
            baristas[name].shift === requestedShift &&
            baristas[name].coffeeSkills.has(coffeeType)
        ) {
            console.log(`${name} has prepared a ${coffeeType} for you!`);
        } else {
            console.log(`${name} is not available to prepare a ${coffeeType}.`);
        }
    }

    function printBaristas() {
        Object.values(baristas).forEach((barista) => {
            console.log(
                `Barista: ${barista.name}, Shift: ${
                    barista.shift
                }, Drinks: ${Array.from(barista.coffeeSkills).join(', ')}`
            );
        });
    }

    const n = parseInt(input.shift(), 10);
    for (let i = 0; i < n; i++) {
        const [name, shift, coffeeTypes] = input.shift().split(' ');
        baristas[name] = createBarista(name, shift, coffeeTypes);
    }

    let line;
    while ((line = input.shift()) !== 'Closed') {
        const [command, name, arg1, arg2] = line.split(' / ');
        switch (command) {
            case 'Prepare':
                prepareCoffee(name, arg1, arg2);
                break;
            case 'Change Shift':
                updateShift(name, arg1);
                break;
            case 'Learn':
                learnNewCoffee(name, arg1);
                break;
        }
    }

    printBaristas();
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed',
]);
