const {
  checkNumberValidity,
  isAnExcpetionNumber,
} = require("./conversion.helper");
const { ABOUT_ZERO } = require("./conversion.message");

async function convertNumber(data = {}) {
  const { number } = data;

  checkNumberValidity(number);

  if (isAnExcpetionNumber(number)) {
    return ABOUT_ZERO;
  }

  return convertToRoman(number);
}

function convertToRoman(number) {
  const romanArray = [
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  if (number === 0) {
    return "";
  }

  for (let i = 0; i < romanArray.length; i++) {
    if (number >= romanArray[i][0]) {
      return romanArray[i][1] + convertToRoman(number - romanArray[i][0]);
    }
  }
}

module.exports = { convertNumber };
