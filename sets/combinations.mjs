export function combinations(list, n) {
  if (n === 0 || n > list.length) {
    return [];
  }

  if (n === 1) {
    return list.map((element) => [element]);
  }

  const combs = [];

  for (let i = 0; i < list.length; i++) {
    for (let c of combinations(list.slice(i + 1), n - 1)) {
      combs.push([list[i], ...c]);
    }
  }

  return combs;
}

export function combinationsWithRepetition(list, n) {
  if (n == 0) {
    return [];
  }

  if (n === 1) {
    return list.map((element) => [element]);
  }

  const combs = [];

  for (let i = 0; i < list.length; i++) {
    for (let c of combinationsWithRepetition(list.slice(i), n - 1)) {
      combs.push([list[i], ...c]);
    }
  }

  return combs;
}

// function

console.log(combinationsWithRepetition([1, 2, 3], 3));
