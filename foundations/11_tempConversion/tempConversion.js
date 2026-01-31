const convertToCelsius = function (far) {
  let cel = 0;
  cel = Number(((far - 32) * (5 / 9)).toFixed(1));
  return cel;
};

const convertToFahrenheit = function (cel) {
  let far = 0;
  far = Number((cel * (9 / 5) + 32).toFixed(1));
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
