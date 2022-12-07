const { getInput } = require("./base");

const elvesCalories = getInput();

console.log(
  elvesCalories
    .split("\n\n")
    .map((group) =>
      group
        .split("\n")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    )
    .reduce((a, b) => Math.max(a, b), 0)
);

console.log(
  elvesCalories
    .split("\n\n")
    .map((group) =>
      group

        .split("\n")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0)
);
