const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => {
    return num > 2;
  })
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => {
    return word.length < 7;
  })
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(num => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  //
  return arr.find((num) => {
    return num % 4 === 0
  })
};

const firstWordLongerThan4Char = (arr) => {
  //
  return arr.find((word) => {
    return word.length > 4
  })
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => {
   return num % 3 === 0 
  })
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex((word) => {
   return word.length < 2 
  })
};

// For Each

const logValuesTimes3 = () => {
  //
  nums.forEach((num) => {
    console.log(num * 3);
  });
};

const logWordsWithExclamation = () => {
  //
  words.forEach((word) => {
    console.log(word + '!');
  });
};

// Map

const arrayValuesSquaredTimesIndex = () => {
   return nums.map((num, index) => num * num * index);
};

console.log(arrayValuesSquaredTimesIndex());

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase());
};

console.log(arrayWordsUpcased)

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return  nums.some((num) => num % 7 === 0)
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.includes("a"))
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};