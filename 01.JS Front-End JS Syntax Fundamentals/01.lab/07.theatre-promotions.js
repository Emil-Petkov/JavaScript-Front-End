function theatrePromotions(typeOfDay, age) {

    let ticketPrice = 0;

    if (age < 0 || age > 122) {
        console.log('Error!');
    } else {

        switch (typeOfDay) {
            case 'Weekday':
                if (age <= 18) {
                    ticketPrice = 12;
                } else if (age <= 64) {
                    ticketPrice = 18;
                } else {
                    ticketPrice = 12;
                }
                break;

            case 'Weekend':
                if (age <= 18) {
                    ticketPrice = 15;
                } else if (age <= 64) {
                    ticketPrice = 20;
                } else {
                    ticketPrice = 15;
                }
                break;

            case 'Holiday':
                if (age <= 18) {
                    ticketPrice = 5;
                } else if (age <= 64) {
                    ticketPrice = 12;
                } else {
                    ticketPrice = 10;
                }
                break;

        }

        return console.log(`${ticketPrice}$`);

    }
}

theatrePromotions('Holiday', -12) //Error!