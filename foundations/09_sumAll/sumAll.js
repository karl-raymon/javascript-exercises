const sumAll = function (...args) {
  args.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 || Math.floor(args[i]) !== args[i]) {
      return 'ERROR';
    }
  }
  //   if (args.some((item) => item < 0)) return 'Error';

  for (let i = args[0]; i <= args[args.length - 1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
