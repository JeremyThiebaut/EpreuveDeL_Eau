// returns multiple strings from last to first
const returnString = () => {
  const string = process.argv;

  string.splice(0, 2);
  if (string.length != 1) {
    return "error";
  }

  const array = [];

  return string;
};

// Formatting of the result as a string
const displayArray = (result) => {
  console.log(result);
};

// To start the program
const result = returnString();

// To stringify the result
displayArray(result);
