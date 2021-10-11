function simpleSort(arr) {
  const copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      if (copy[i] < copy[j]) {
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
      }
    }
  }
  return copy;
}

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

const a = [];
console.log("Filling arr with 10 000 000 elements");
for (let i = 0; i < 100_000; i++) {
  a.push(Math.floor(Math.random() * 100001))
}
console.log("Done!");

console.log(a);
console.log("Sorting arr with quicksort...");
let start = Date.now();
console.log(quickSort(a));
console.log(`Done sorting. Took ${Date.now() - start}`);
console.log("Sorting arr with simplet sort...");
start = Date.now();
console.log(simpleSort(a));
console.log(`Done sorting. Took ${Date.now() - start}`);



