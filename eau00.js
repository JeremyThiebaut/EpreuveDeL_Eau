const randomNumber = () => {
  const tab = [];

  // On récupere tous les chiffres de 0-9
  for (x = 0; x <= 9; x++) {
    for (y = 0; y <= 9; y++) {
      for (z = 0; z <= 9; z++) {
        if (x != y && x != z && y != z) {
          tab.push(`${x}${y}${z}`);
        }
      }
    }
  }
  return tab;
};

console.log(randomNumber());
