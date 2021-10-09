export function linearSearch(arr, searchElement) {
  const foundIndices = [];

  for (let [index, element] of arr.entries()) {
    if (element === searchElement) {
      foundIndices.push(index);
    }
  }

  return foundIndices;
}

const nums = [];

for (let i = 0; i < 100000000; i++) {
  nums.push(i);
}
const start = Date.now();
console.log(linearSearch(nums, 9999999999));
console.log(Date.now() - start);
