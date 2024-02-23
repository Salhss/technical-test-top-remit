function getIntialName(str) {
  // split string from '-'
  let splitting = str.split("-");

  // variable result
  let initial = "";

  // loop every value at array and get first alphabet and make it uppercase. Then send it to initial
  splitting.forEach((name) => {
    initial += name.charAt(0).toUpperCase();
  });

  // return variable result
  return initial;
}

console.log(getIntialName("Knuth-Morris-Pratt"));
console.log(getIntialName("MIRKO-SLAVKO"));
console.log(getIntialName("PASKO-PATAK"));
