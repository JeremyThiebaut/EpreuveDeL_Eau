/**
 * Par ordre Ascii

Créez un programme qui trie les éléments donnés en argument par ordre ASCII.

Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo

$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
const ascii = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

/**********************
 *   Error management  *
 **********************/
const error = () => {
  console.log("error");
  process.exit();
};

/********************
 *      Parsing      *
 ********************/
const parsing = () => {
  const arg = process.argv;
  arg.splice(0, 2);

  if (arg.length < 1) {
    return error();
  }
  arg.map((element) => {
    if (!isNaN(element)) {
      return error();
    }
  });

  return ascii(arg);
};

/****************
 *   Formatting  *
 ****************/
const displayArray = (result) => {
  let stringResult = "";

  for (let i = 0; i < result.length - 1; i++) {
    stringResult += `${result[i]} `;
  }
  stringResult += result[result.length - 1];
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
