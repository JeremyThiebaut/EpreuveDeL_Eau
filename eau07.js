/**
 * Majuscule

Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

 */

/********************
 *     Functions     *
 ********************/
const majuscule = (str) => {
  const element = str.split(" ");
  for (let i = 0; i < element.length; i++) {
    element[i] = element[i].charAt(0).toUpperCase() + element[i].substr(1);
  }

  return element;
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
  return majuscule(arg[0]);
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
