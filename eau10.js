/**
 * Index wanted

Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6


$> python exo.py test test test
0

$> python exo.py test boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
const wanted = (arg) => {
  const search = arg[arg.length - 1];
  arg.splice(arg.length - 1, 1);

  return arg.indexOf(search);
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
  return wanted(arg);
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
