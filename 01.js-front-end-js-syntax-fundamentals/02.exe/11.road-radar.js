function radar(speed, typeArea) {
    let status = '';

    const speedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    switch (typeArea) {
        case 'motorway':
            if (speed <= speedLimit.motorway) {
                return `Driving ${speed} km/h in a ${speedLimit.motorway} zone`
            } else {
                let diff = Math.abs(speed - speedLimit.motorway);
                if (diff <= 20) {
                    status = 'speeding'
                }
                else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                return `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit.motorway} - ${status}`
            }

        case 'interstate':
            if (speed <= speedLimit.interstate) {
                return `Driving ${speed} km/h in a ${speedLimit.interstate} zone`
            } else {
                let diff = Math.abs(speed - speedLimit.interstate);
                if (diff <= 20) {
                    status = 'speeding'
                }
                else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                return `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit.interstate} - ${status}`
            }

        case 'city':
            if (speed <= speedLimit.city) {
                return `Driving ${speed} km/h in a ${speedLimit.city} zone`
            } else {
                let diff = Math.abs(speed - speedLimit.city);
                if (diff <= 20) {
                    status = 'speeding'
                }
                else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                return `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit.city} - ${status}`
            }


        case 'residential':
            if (speed <= speedLimit.residential) {
                return `Driving ${speed} km/h in a ${speedLimit.residential} zone`
            } else {
                let diff = Math.abs(speed - speedLimit.residential);
                if (diff <= 20) {
                    status = 'speeding'
                }
                else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                return `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit.residential} - ${status}`
            }
    }
}

console.log(radar(120, 'interstate'));