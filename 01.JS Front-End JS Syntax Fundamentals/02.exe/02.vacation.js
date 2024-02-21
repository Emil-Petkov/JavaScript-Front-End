function vacation(nPeople, typeGroup, dayOfWeek) {
    let totalPrice = 0;

    switch (typeGroup) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                totalPrice = nPeople * 8.45;

            } else if (dayOfWeek === 'Saturday') {
                totalPrice = nPeople * 9.80;

            } else if (dayOfWeek === 'Sunday') {
                totalPrice = nPeople * 10.46;
            }

            if (nPeople >= 30) {
                totalPrice -= totalPrice * 0.15;
            }
            break;

        case 'Business':

            if (nPeople >= 100) {
                nPeople -= 10
            }

            if (dayOfWeek === 'Friday') {
                totalPrice = nPeople * 10.90;

            } else if (dayOfWeek === 'Saturday') {
                totalPrice = nPeople * 15.60;

            } else if (dayOfWeek === 'Sunday') {
                totalPrice = nPeople * 16.00;
            }
            break;

        case 'Regular':
            if (dayOfWeek === 'Friday') {
                totalPrice = nPeople * 15.00;

            } else if (dayOfWeek === 'Saturday') {
                totalPrice = nPeople * 20.00;

            } else if (dayOfWeek === 'Sunday') {
                totalPrice = nPeople * 22.50;
            }

            if (nPeople >= 10 && nPeople <= 20) {
                totalPrice -= totalPrice * 0.05;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday"); //Total price: 266.73