/**
 * Tri par sélection
 * 
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6

$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

Wikipedia vous présentera une belle description de cet algorithme de tri.
 */

/********************
 *     Functions     *
 ********************/
const select = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 2; i++) {
    let min = i;
    for (let j = i + 1; j < n - 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      [array[i], array[min]] = [array[min], array[i]];
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
    if (isNaN(element)) {
      return error();
    }
  });
  return select(arg);
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
