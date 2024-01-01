function reverseAnArrayOfNumbers(nElements, arrayOfNummbers) {
    let firstNumbers = arrayOfNummbers.slice(0, nElements);
    rev = firstNumbers.reverse()
    console.log(rev.join(' '))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
