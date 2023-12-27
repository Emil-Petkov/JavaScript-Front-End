function vacantion(peoples, typeReservation, dayOfWeek) {
  let neededSum = 0;

  if (typeReservation == 'Students') {
    if (dayOfWeek == 'Friday') {
      neededSum += peoples * 8.45;
    } else if (dayOfWeek == 'Saturday') {
      neededSum += peoples * 9.8;
    } else if (dayOfWeek == 'Sunday') {
      neededSum += peoples * 10.46;
    }
    if (peoples >= 30) {
      neededSum -= neededSum * 0.15;
    }
  } else if (typeReservation == 'Business') {
    if (peoples >= 100) {
      peoples -= 10;
    }
    if (dayOfWeek == 'Friday') {
      neededSum += peoples * 10.9;
    } else if (dayOfWeek == 'Saturday') {
      neededSum += peoples * 15.6;
    } else if (dayOfWeek == 'Sunday') {
      neededSum += peoples * 16;
    }
  } else if (typeReservation == 'Regular') {
    if (dayOfWeek == 'Friday') {
      neededSum += peoples * 15;
    } else if (dayOfWeek == 'Saturday') {
      neededSum += peoples * 20;
    } else if (dayOfWeek == 'Sunday') {
      neededSum += peoples * 22.5;
    }
    if (peoples >= 10 && peoples <= 20) {
      neededSum -= neededSum * 0.05;
    }
  }
  console.log(`Total price: ${neededSum.toFixed(2)}`);
}

vacantion(40, 'Regular', 'Saturday');
