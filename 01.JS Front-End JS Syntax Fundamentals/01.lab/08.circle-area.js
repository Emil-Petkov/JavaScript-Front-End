function circleArea(radius) {
    if (typeof radius != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (radius)}.`);

    } else {
        let r = Math.PI * radius * radius

        console.log(r.toFixed(2));
    }
}

circleArea(5); //78.54
circleArea('name'); //We can not calculate the circle area, because we receive a string.
