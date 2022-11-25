/********************
 *     Functions     *
 ********************/
const primary = (nbr) => {
  nbr++;
  while (!boucle(nbr)) {
    nbr++;
  }

  return nbr;
};

const boucle = (nbr) => {
  if (nbr <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(nbr); i++) {
    if (nbr % i == 0) {
      return false;
    }
  }
  return true;
};

/********************
 *      Parsing      *
 ********************/
const parsing = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);
  if (nbr.length != 1 || Number(nbr[0] < 0) || isNaN(nbr[0])) {
    return error();
  }

  return primary(nbr[0]);
};

/**********************
 *   Error management  *
 **********************/
const error = () => {
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
