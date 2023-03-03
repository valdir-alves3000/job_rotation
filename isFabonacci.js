function isFabonacci(number){
  let a = 0;
  let b = 1;
  let fib = b;

  while(fib < number) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return fib === number || number === 0;
}
