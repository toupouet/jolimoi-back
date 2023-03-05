const {
  MISSING_PROPERTY,
} = require("../helpers/messages/common-error.message");
const {
  CAN_ONLY_CONVERT_NUMBER,
  CONVERT_NUMBER_GAP,
} = require("./conversion.message");

function checkNumberValidity(number) {
  if (number === undefined) throw new Error(`${MISSING_PROPERTY} number`);

  if (isNotANumber(number)) throw new Error(CAN_ONLY_CONVERT_NUMBER);

  if (isNotANumberInTheGap(number)) throw new Error(CONVERT_NUMBER_GAP);
}

function isNotANumber(number) {
  return isAnExcpetionNumber(number) ? false : !+number;
}

function isNotANumberInTheGap(number) {
  return number < 0 || number > 100;
}

function isAnExcpetionNumber(number) {
  return +number === 0;
}

module.exports = {
  checkNumberValidity,
  isAnExcpetionNumber,
};
