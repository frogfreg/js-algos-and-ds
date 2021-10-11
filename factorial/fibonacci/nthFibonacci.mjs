export function nthFibonacci(n) {
  let current = 1;
  let previous = 0;

  if (n === 1) {
    return 1;
  }

  let iterationCounter = n - 1;

  while (iterationCounter) {
    current += previous;
    previous = current - previous;

    iterationCounter -= 1;
  }
  return current;
}

export function fibonacciBinet(n) {
  return Math.floor(
    (1 / Math.sqrt(5)) *
      (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n)
  );
}

console.log(fibonacciBinet(4));
