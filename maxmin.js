const arr = prompt(
  "Enter a sequence of numbers separated by spaces e.g. 3 4 2 9 12"
)
  .split(" ")
  .map((s) => Number(s));
const minOfArr = arr.reduce((x, y) => (y < x ? y : x));
const maxOfArr = arr.reduce((x, y) => (y > x ? y : x));
console.log([minOfArr, maxOfArr]);
