// function monthOfYear(currentMonth) {
//   if (currentMonth == 1) {
//     console.log("January");
//   } else if (currentMonth == 2) {
//     console.log("February");
//   } else if (currentMonth == 3) {
//     console.log("March");
//   } else if (currentMonth == 4) {
//     console.log("April");
//   } else if (currentMonth == 5) {
//     console.log("May");
//   } else if (currentMonth == 6) {
//     console.log("June");
//   } else if (currentMonth == 7) {
//     console.log("July");
//   } else if (currentMonth == 8) {
//     console.log("August");
//   } else if (currentMonth == 9) {
//     console.log("September");
//   } else if (currentMonth == 10) {
//     console.log("October");
//   } else if (currentMonth == 11) {
//     console.log("November");
//   } else if (currentMonth == 12) {
//     console.log("December");
//   } else {
//     console.log("Error!");
//   }
// }

// monthOfYear(3);
//March

function monthOfYear(currentMonth) {
  switch (currentMonth) {
    case 1:
      console.log('January');
      break;

    case 2:
      console.log('February');
      break;

    case 3:
      console.log('March');
      break;

    case 4:
      console.log('April');
      break;

    case 5:
      console.log('May');
      break;

    case 6:
      console.log('June');
      break;

    case 7:
      console.log('July');
      break;

    case 8:
      console.log('August');
      break;

    case 9:
      console.log('September');
      break;

    case 10:
      console.log('October');
      break;

    case 11:
      console.log('November');
      break;

    case 12:
      console.log('December');
      break;

    default:
      console.log('Error!');
  }
}

monthOfYear(31);
//Error!
