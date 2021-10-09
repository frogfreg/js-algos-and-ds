export function binarySearch(arr, searchElement) {
  let start = 0;
  let finish = arr.length - 1;

  while (finish >= start) {
    const middleIndex = start + Math.floor((finish - start) / 2);

    if (arr[middleIndex] === searchElement) {
      return middleIndex;
    }

    if (searchElement < middleIndex) {
      finish = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
  }

  return -1;
}

const nums = [];

for (let i = 0; i < 100000; i++) {
  nums.push(i);
}

console.log(binarySearch(nums,7400));
