export function sieveOfE(n) {
  const nums = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      nums.push(false);
      continue;
    }
    nums.push(true);
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (nums[i]) {
      for (let j = i ** 2; j <= n; j += i) {
        nums[j] = false;
      }
    }
  }

  const primes = [];

  for (let i in nums) {
    if (nums[i]) {
      primes.push(+i);
    }
  }

  return primes;
}

console.log(sieveOfE(30));
