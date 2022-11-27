/**
 * Tri à bulle

Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
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
const bubble = (array) => {
  const newArray = array;
  let trie = true;

  for (let i = newArray.length - 1; i > 0; i--) {
    trie = true;
    for (let j = 0; j < i; j++) {
      if (Number(newArray[j]) > Number(newArray[j + 1])) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
        trie = false;
      }
    }
    if (trie) {
      return newArray;
    }
  }
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

  if (arg.length < 2) {
    return error();
  }

  arg.forEach((element) => {
    if (isNaN(element)) {
      return error();
    }
  });

  return bubble(arg);
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
