function solve(typeOfDay, age) {
    if (age >= 0 && age <= 1000) {
        switch (typeOfDay) {
            case 'Weekday':
                if (age <= 18) {
                    return '12$'
                } else if (age <= 64) {
                    return '18$'
                } else if (age <= 122) {
                    return '12$'
                }

            case 'Weekend':
                if (age <= 18) {
                    return '15$'
                } else if (age <= 64) {
                    return '20$'
                } else if (age <= 122) {
                    return '15$'
                }

            case 'Holiday':
                if (age <= 18) {
                    return '5$'
                } else if (age <= 64) {
                    return '12$'
                } else if (age <= 122) {
                    return '10$'
                }
        }
    } else {
        return 'Error!'
    }
}

console.log(solve('Weekday',));
