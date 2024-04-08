function solve(array) {
    const meetings = {};

    for (const el of array) {
        const [day, name] = el.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name
            console.log(`Scheduled for ${day}`);

        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    Object.keys(meetings).forEach(day => {
        console.log(`${day} -> ${meetings[day]}`);
    })
}

solve([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);