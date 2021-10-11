export function isPrime(n) {
  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  const maxDiv = Math.sqrt(n);

  for (let div = 3; div <= maxDiv; div += 2) {
    if (n % div === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7919));
