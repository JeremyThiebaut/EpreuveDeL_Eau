// create two numbers and return them in increasing order
const getNumber = () => {
  const num = [];
  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 9; y++) {
      for (let z = 0; z <= 9; z++) {
        for (let i = 0; i <= 9; i++) {
          let firstNumber = `${x}${y}`;
          let secondNumber = `${z}${i}`;
          if (!num.includes(`${firstNumber} ${secondNumber}`)) {
            if (!num.includes(`${firstNumber} ${secondNumber}`)) {
              num.push(`${firstNumber} ${secondNumber}`);
            }
          }
        }
      }
    }
  }
  return num;
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
const result = getNumber();

// To stringify the result
displayArray(result);
