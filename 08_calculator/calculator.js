const add = function (...args) {
  return args.reduce((acc, cur) => acc + cur, 0)
};

const subtract = function(start, ...args) {
  return args.reduce((acc, cur) => acc - cur, start)
	
};

const sum = function(...args) {
	return Number(args.flat().reduce((acc, cur) => acc + cur, 0))
};

const multiply = function(...args) {
  start= args.flat()[0]
  args = args.flat().splice(1)
  return args.flat().reduce((acc, cur) => acc * cur, start)
};

const power = function(base, exp) {
  return base**exp
};

const factorial = function(num) {
  if (num < 0) {
    return 'num must not be negative'
  }
  if (num <= 1) {
    // Both 1! and 0! are defined as 1
    return 1
  }
  return num * factorial(num -1)
	
};

console.log(factorial(3))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
