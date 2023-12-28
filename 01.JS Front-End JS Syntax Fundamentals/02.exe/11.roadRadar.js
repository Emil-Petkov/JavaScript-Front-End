function roadRadar(speed, area) {
    let isToFast = false;
    let diff = 0;
    let areaLimit = 0;
    let status = '';
  
    if (area == 'motorway') {
      areaLimit = 130;
    } else if (area == 'interstate') {
      areaLimit = 90;
    } else if (area == 'city') {
      areaLimit = 50;
    } else if (area == 'residential') {
      areaLimit = 20;
    }
  
    if (speed > areaLimit) {
      isToFast = true;
      diff = Math.abs(speed - areaLimit);
    }
  
    if (diff > 40) {
      status = 'reckless driving';
    } else if (diff > 20) {
      status = 'excessive speeding';
    } else if (diff > 0) {
      status = 'speeding';
    }
  
    if (isToFast) {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${areaLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
    }
  }
  