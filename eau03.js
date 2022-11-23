/********************
 *     Functions     *
 ********************/
const fibonacci = (text) => {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;

  for (let i = 2; i <= text; i++) {
    somme = n1 + n2;
    n1 = n2;
    n2 = somme;
  }

  return text ? n2 : n1;
};

/********************
 *      Parsing      *
 ********************/
const parsing = () => {
  const text = process.argv;
  text.splice(0, 2);

  if (text.length != 1 || isNaN(text[0]) || text[0] < 0) {
    return errorLog();
  } else {
    return fibonacci(text);
  }
};

/**********************
 *   Error management  *
 **********************/
const errorLog = () => {
  return Number(-1);
};

/****************
 *   Formatting  *
 ****************/
const displayArray = (result) => {
  console.log(result);
};

/********************
 *        Main       *
 ********************/
const result = parsing();

/********************
 *       Result      *
 ********************/
displayArray(result);
