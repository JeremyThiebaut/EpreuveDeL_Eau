/**
 * String dans string

Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

 */

/********************
 *     Functions     *
 ********************/
const stringIn = (arg) => {
  let result = arg[0].includes(`${arg[1]}`);

  return result;
};

/********************
 *      Parsing      *
 ********************/
const parsing = () => {
  const arg = process.argv;
  arg.splice(0, 2);
  if (arg.length !== 2) {
    return error();
  }

  return stringIn(arg);
};

/**********************
 *   Error management  *
 **********************/
const error = () => {
  console.log("error");
  process.exit();
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
