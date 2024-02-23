function quadrantSelection(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  const quadrant =
    Math.sign(x) === 1
      ? Math.sign(y) === 1
        ? 1
        : 4
      : Math.sign(y) === 1
      ? 2
      : 3;

  return quadrant;
}

console.log(quadrantSelection(10, 6)); // 1
console.log(quadrantSelection(9, -13)); // 4

// function quadrantSelection(num1, num2) {
//   if (num1 > 0 && num2 > 0) return 1;
//   if (num1 < 0 && num2 > 0) return 2;
//   if (num1 < 0 && num2 < 0) return 3;
//   if (num1 > 0 && num2 < 0) return 4;
// }

// console.log(quadrantSelection(10, 6)); // 1
// console.log(quadrantSelection(9, -13)); // 4
