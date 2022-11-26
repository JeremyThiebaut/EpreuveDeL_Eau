/**
 * Entre min et max

Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


 */

/********************
 *     Functions     *
 ********************/
const between = (arg) => {
  let newArray = [];
  const num1 = Math.min(arg[0], arg[1]);
  const num2 = Math.max(arg[0], arg[1]);
  for (let i = num1; i < num2; i++) {
    newArray.push(i);
  }
  return newArray;
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

  if (arg.length != 2 || isNaN(arg[0]) || isNaN(arg[1])) {
    return error();
  }
  return between(arg);
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
