const removeFromArray = function (arr, ...params) {
  let newArr = [];
  arr.map((item) => {
    if (!params.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js
