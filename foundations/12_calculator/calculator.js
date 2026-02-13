const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  // let tempTotal = 0;
  if (a === 0) {
    return 1;
  }
  const arr = [];
  for (let i = 1; i <= a; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a * b);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
