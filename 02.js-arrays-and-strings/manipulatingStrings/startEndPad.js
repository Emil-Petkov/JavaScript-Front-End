let text = 'hello';
console.log(text.padStart(17, 'H')); //HHHHHHHHHHHHhello -> adds n characters to the front until the total length is reached
console.log(text.padEnd(17, 'H')); //helloHHHHHHHHHHHH -> adds n characters to the back until the total length is reached
