const fibonacci = function (num) {
  let temp = 1;
  //   let sum = 0;
  let arr = [];
  if (num < 0) {
    return 'OOPS';
  } else if (num == 0) {
    return 0;
  }
  for (let i = 0; i < num; i++) {
    if (arr.length === 0 || arr.length === 1) {
      arr.push(temp);
    } else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }

  //   for (let j = 0; j < arr.length; j++) {
  //     sum += arr.length();
  //   }
  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
