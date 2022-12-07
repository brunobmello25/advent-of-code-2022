const path = require("path");
const fs = require("fs");

function getInput() {
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
  return input;
}

module.exports = {
  getInput,
};
