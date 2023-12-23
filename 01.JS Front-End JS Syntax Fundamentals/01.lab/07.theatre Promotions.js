function tiketSale(dayOfWeek, personAge) {
  if (personAge >= 0 && personAge <= 18) {
    if (dayOfWeek == 'Weekday') {
      console.log('12$');
    } else if (dayOfWeek == 'Weekend') {
      console.log('15$');
    } else if (dayOfWeek == 'Holiday') {
      console.log('5$');
    }
  } else if (personAge > 18 && personAge <= 64) {
    if (dayOfWeek == 'Weekday') {
      console.log('18$');
    } else if (dayOfWeek == 'Weekend') {
      console.log('20$');
    } else if (dayOfWeek == 'Holiday') {
      console.log('12$');
    }
  } else if (personAge > 64 && personAge <= 122) {
    if (dayOfWeek == 'Weekday') {
      console.log('12$');
    } else if (dayOfWeek == 'Weekend') {
      console.log('15$');
    } else if (dayOfWeek == 'Holiday') {
      console.log('10$');
    }
  } else {
    console.log('Error!');
  }
}

tiketSale('Weekday', 42);
