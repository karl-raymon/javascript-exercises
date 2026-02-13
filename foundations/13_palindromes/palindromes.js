const palindromes = function (word) {
  let cleanedWord = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let reversedWord = cleanedWord.split('').reverse().join('');

  return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
