

















function currentAge(age) {
    if (age >= 0) {
        if (age < 2) {
            return 'baby';
        } else if (age <= 13) {
            return 'child';;
        } else if (age <= 19) {
            return 'teenager';
        } else if (age <= 65) {
            return 'adult';
        } else if (age >= 66) {
            return 'elder';
        }
    } else {
        return 'out of bounds';
    }
}

console.log(currentAge(20));
