export function permutations(list, n) {
  if (n > list.length) {
    throw new Error("n must be less than the set length");
  }
  if (n === 0 || list.length === 0) {
    return [];
  }

  if (n === 1) {
    return list.map((num) => [num]);
  }

  if (n === 2) {
    const set = [];
    let subset = [];

    for (let i = 0; i < list.length; i++) {
      subset = [list[i]];
      for (let j = 0; j < list.length; j++) {
        if (subset.length === 2) {
          set.push(subset);
          subset = [list[i]];
        }
        if (i !== j) {
          subset.push(list[j]);
          if (subset.length === 2) {
            set.push(subset);
            subset = [list[i]];
          }
        }
      }
    }

    return set;
  }

  const perms = [];

  for (let i = 0; i < list.length; i++) {
    for (let p of permutations(
      [...list.slice(0, i), ...list.slice(i + 1)],
      n - 1
    )) {
      perms.push([list[i], ...p]);
    }
  }

  return perms;
}

export function permsWithRepetition(list, n = 0) {
  if (n === 0 || list.length < n) {
    return [];
  }
  if (n === 1) {
    return list.map((element) => [element]);
  }

  const permutations = [];

  const smallerPermutations = permsWithRepetition(list, n - 1);

  list.forEach((element) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([element, ...smallerPermutation]);
    });
  });

  return permutations;
}

console.log(permutations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8).length);
console.log(permsWithRepetition([1, 2, 3], 2));
