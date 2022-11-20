const randomNumber = () => {
  const tab = [];

  // Create an array that takes 3 numbers ranging from 0 to 9 and not using the same character per object
  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 9; y++) {
      for (let z = 0; z <= 9; z++) {
        if (x != y && x != z && y != z) {
          const number = `${x}${y}${z}`;
          const attente = formatNumber(x, y, z);

          if (!tab.includes(number)) {
            let combinaison;

            attente.forEach((possibility) => {
              if (tab.includes(possibility)) {
                combinaison = true;
              }
            });

            if (!combinaison) {
              tab.push(number);
            }
          }
        }
      }
    }
  }
  return tab;
};

// Returns an array with all the placement possibilities
const formatNumber = (a, b, c) => {
  const result = [];
  result.push(
    `${a}${b}${c}`,
    `${a}${c}${b}`,
    `${b}${a}${c}`,
    `${b}${c}${a}`,
    `${c}${a}${b}`,
    `${c}${b}${a}`
  );

  return result;
};

// Formatting of the result as a string
const displayArray = (result) => {
  let stringResult = "";
  for (let i = 0; i < result.length - 1; i++) {
    stringResult += `${result[i]}, `;
  }
  stringResult += result[result.length - 1];
  console.log(stringResult);
};

// To start the program
const result = randomNumber();

// To stringify the result
displayArray(result);
