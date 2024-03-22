





function solve(peoples, type, day) {

    let total = 0;

    switch (day) {
        case 'Friday': {
            if (type == 'Students') {
                if (peoples >= 30) {
                    let sum = peoples * 8.45;
                    total = sum - (sum * 0.15);
                } else {
                    total = peoples * 8.45;
                }
            } else if (type == 'Business') {
                if (peoples > 100) {
                    total = (peoples - 10) * 10.90;
                } else {
                    total = peoples * 10.90;
                }
            } else if (type == 'Regular') {
                if (peoples >= 10 && peoples <= 20) {
                    sum = peoples * 15.00;
                    total = sum - (sum * 0.05);
                } else {
                    total = peoples * 15.00;
                }
            }
        }
            break

        case 'Saturday': {
            if (type == 'Students') {
                if (peoples >= 30) {
                    let sum = peoples * 9.80;
                    total = sum - (sum * 0.15);
                } else {
                    total = peoples * 9.80;
                }
            } else if (type == 'Business') {
                if (peoples > 100) {
                    total = (peoples - 10) * 15.60;
                } else {
                    total = peoples * 15.60;
                }
            } else if (type == 'Regular') {
                if (peoples >= 10 && peoples <= 20) {
                    sum = peoples * 20.00;
                    total = sum - (sum * 0.05);
                } else {
                    total = peoples * 20.00;
                }
            }
        }
            break;

        case 'Sunday': {
            if (type == 'Students') {
                if (peoples >= 30) {
                    let sum = peoples * 10.46;
                    total = sum - (sum * 0.15);
                } else {
                    total = peoples * 10.46;
                }
            } else if (type == 'Business') {
                if (peoples > 100) {
                    total = (peoples - 10) * 16.00;
                } else {
                    total = peoples * 16.00;
                }
            } else if (type == 'Regular') {
                if (peoples >= 10 && peoples <= 20) {
                    sum = peoples * 22.50;
                    total = sum - (sum * 0.05);
                } else {
                    total = peoples * 22.50;
                }
            }
        }
            break;
    }
    return `Total price: ${total.toFixed(2)}`;
}

console.log(solve(40, "Regular", "Saturday"));
