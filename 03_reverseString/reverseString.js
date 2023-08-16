const reverseString = function (string) {
  let input = [...string];
  let inputReversed = "";

  for (let i = input.length - 1; i >= 0; i--) {
    console.log(input[i]);
    inputReversed += input[i];
  }
  return inputReversed;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
