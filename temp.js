function generateCombinations(matches) {
  const outcomes = ["1", "N", "2"];
  const totalCombinations = Math.pow(3, matches);
  let combinations = [];

  for (let i = 0; i < totalCombinations; i++) {
    let combination = "";
    let num = i;

    for (let j = 0; j < matches; j++) {
      combination = outcomes[num % 3] + combination;
      num = Math.floor(num / 3);
    }

    combinations.push(combination);
  }

  return combinations;
}

function generateNMinusOne(matches, excludeCombination) {
  let allCombinations = generateCombinations(matches);
  return allCombinations.filter((comb) => comb !== excludeCombination);
}

// Exemple d'utilisation
const matches = 4; // Nombre de matchs
const excludeCombination = "1N2N"; // Combinaison à exclure
const nMinusOne = generateNMinusOne(matches, excludeCombination);
console.log(nMinusOne);
