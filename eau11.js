/**
 * Différence minimum absolue

Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.

Exemples d’utilisation :
$> python exo.py 5 1 19 21
2

$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
const minValue = (arg) => {
  const newArray = [];
  for (let i = 0; i < arg.length - 1; i++) {
    for (let x = 0; x < arg.length - 1; x++) {
      if (x != i) {
        newArray.push(Math.abs(arg[i] - arg[x]));
      }
    }
  }

  return Math.min(...newArray);
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

  return minValue(arg);
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
