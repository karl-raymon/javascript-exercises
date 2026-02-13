const findTheOldest = function (arr) {
  const newArr = arr.sort((a, b) => {
    const prev = (a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth;
    const curr = (b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth;

    return prev - curr;
  });
  return newArr[newArr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
