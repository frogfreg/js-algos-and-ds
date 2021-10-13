function bwPowerSet(originalSet) {
  const subsets = [];

  const numberOfCombinations = 2 ** originalSet.length;

  for (
    let combinationIndex = 0;
    combinationIndex < numberOfCombinations;
    combinationIndex++
  ) {
    const subset = [];

    for (
      let setElementIndex = 0;
      setElementIndex < originalSet.length;
      setElementIndex++
    ) {
      if (combinationIndex & (1 << setElementIndex)) {
        subset.push(originalSet[setElementIndex]);
      }
    }
    subsets.push(subset);
  }

  return subsets;
}

function btPowerSet(
  originalSet,
  allSubsets = [[]],
  currentSubset = [],
  startAt = 0
) {
  for (let position = startAt; position < originalSet.length; position += 1) {
    currentSubset.push(originalSet[position]);
    allSubsets.push([...currentSubset]);
    btPowerSet(originalSet, allSubsets, currentSubset, position + 1);

    currentSubset.pop();
  }

  return allSubsets;
}

console.log(bwPowerSet(["a", "b", "c", "d"]));
console.log(btPowerSet(["a", "b", "c"]));
