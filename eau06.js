/**
 * Majuscule sur deux
 
Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
const majMin = (arg) => {
  let newstring = "";
  let pair = 0;

  [...arg].forEach((letter) => {
    if (pair % 2 == 0) {
      newstring += letter.toUpperCase();
    } else {
      newstring += letter;
    }
    pair++;
  });

  return newstring;
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
  if (arg.length != 1 || !isNaN(arg[0])) {
    return error();
  }
  return majMin(arg[0]);
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
