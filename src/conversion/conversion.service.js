const {
  checkNumberValidity,
  isAnExcpetionNumber,
} = require("./conversion.helper");
const { ABOUT_ZERO } = require("./conversion.message");

let convertedNumber;

async function convertNumber(data = {}) {
  const { number } = data;

  checkNumberValidity(number);

  if (isAnExcpetionNumber(number)) {
    return ABOUT_ZERO;
  }

  convertedNumber = convertToRoman(number);

  return convertedNumber;
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

async function serverSentEvents(res) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };

  res.writeHead(200, headers);
  setInterval(async () => {
    res.write(`data: ${JSON.stringify({ convertedNumber })}`);
    res.write("\n\n");
  }, 5000);
}

module.exports = { convertNumber, serverSentEvents };
