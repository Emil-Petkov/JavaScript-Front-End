function solve(password) {
    let errors = [];

    let passwordLength = password.length;

    if (!(passwordLength >= 6 && passwordLength <= 10)) {
        errors.push('Password must be between 6 and 10 characters')
    }

    const lettersAndDigits = /^[A-Za-z\d]+$/;

    if (!lettersAndDigits.test(password)) {
        errors.push('Password must consist only of letters and digits')
    }

    const vialidTwoOrMoreDigits = /(\d.*\d)/;

    if (!vialidTwoOrMoreDigits.test(password)) {
        errors.push('Password must have at least 2 digits')
    }

    if (errors.length > 0) {
        return errors.join('\n');
    } else {
        return 'Password is valid';
    }
};

console.log(solve('Pa$s$s'));