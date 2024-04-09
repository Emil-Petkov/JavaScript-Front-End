function decodeCryptocurrencyInformation(input) {
    let message = input.shift();

    input.forEach((command) => {
        let [action, param1, param2] = command.split('?');
        switch (action) {
            case 'TakeEven':
                message = message
                    .split('')
                    .filter((_, index) => index % 2 === 0)
                    .join('');
                console.log(message);
                break;
            case 'ChangeAll':
                while (message.includes(param1)) {
                    message = message.replace(param1, param2);
                }
                console.log(message);
                break;
            case 'Reverse':
                if (message.includes(param1)) {
                    let start = message.indexOf(param1);
                    let end = start + param1.length;
                    let reversed = message
                        .substring(start, end)
                        .split('')
                        .reverse()
                        .join('');
                    message =
                        message.substring(0, start) +
                        message.substring(end) +
                        reversed;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'Buy':
                console.log(`The cryptocurrency is: ${message}`);
                break;
        }
    });
}

decodeCryptocurrencyInformation([
    'z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs',
    'TakeEven',
    'Reverse?!nzahc',
    'ChangeAll?m?g',
    'Reverse?adshk',
    'ChangeAll?z?i',
    'Buy',
]);
