export function factorialRec(n) {
  if (n <= 0) {
    return 1;
  }

  return factorialRec(n - 1) * n;
}

export function factorial(n) {
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

console.log(factorialRec(15));
console.log(factorial(15));
