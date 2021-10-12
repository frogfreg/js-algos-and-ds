const cardRanks = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

const cardSuits = ["Spades", "Diamonds", "Hearts", "Clubs"];

function cartesianProd(set1, set2) {
  const set = [];
  for (let el1 of set1) {
    for (let el2 of set2) {
      set.push([el1, el2]);
    }
  }

  return set;
}

console.log(cartesianProd(cardRanks, cardSuits));
