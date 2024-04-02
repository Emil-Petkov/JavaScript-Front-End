function printSay() {
  console.log('Say');
}

function alaBala(callbackFn) {
  callbackFn();

  console.log('Hello');
}

alaBala(printSay);
