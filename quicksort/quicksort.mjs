export function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return [arr[0]];
  }

  const pivot = arr[0];
  const left = [];
  const center = [];
  const right = [];

  for (let element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      center.push(element);
    }
  }

  return [...quickSort(left), ...center, ...quickSort(right)];
}

const a = [10, 3, 0, 15, 10, 18, 2, 7, 11];

console.log(quickSort(a));
