const repeatString = function (string, num) {
  let repeatedStr = "";

  if (num < 0) return "ERROR";

  for (let i = 0; i < num; i++) {
    repeatedStr += string;
  }

  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
