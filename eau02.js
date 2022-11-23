/********************
 *     Functions     *
 ********************/

// returns multiple strings from last to first
const returnString = (text) => {
  const bundleText = [];
  text.forEach((element) => {
    bundleText.push(element);
  });

  return bundleText;
};

/********************
 *      Parsing      *
 ********************/

const parsing = () => {
  const text = process.argv;

  text.splice(0, 2);
  if (text.length < 1) {
    errorLog();
  } else {
    return returnString(text);
  }
};

/**********************
 *   Error management  *
 **********************/
const errorLog = () => {
  console.log("error, closure of the terminal");
  process.exit();
};

/****************
 *   Formatting  *
 ****************/
const displayArray = (result) => {
  let stringResult = "";

  for (let i = result.length; i > 1; i--) {
    stringResult += `${result[i - 1]}\n`;
  }

  stringResult += result[0];

  console.log(stringResult);
};

/********************
 *        Main       *
 ********************/
const result = parsing();

/********************
 *       Result      *
 ********************/
displayArray(result);
