function solve(radius) {
    if ('number' === typeof radius)  {
        let areaOfCircle = Math.PI * radius * radius

        return areaOfCircle.toFixed(2);
    } else{
        return `We can not calculate the circle area, because we receive a ${typeof radius}.`
    }
}

console.log(solve(5));