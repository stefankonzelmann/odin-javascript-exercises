const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let lower;
  let upper;
  let sum = 0;

  if (num1 > num2) {
    lower = num2;
    upper = num1;
  } else {
    lower = num1;
    upper = num2;
  }

  for (i = lower; i <= upper; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
