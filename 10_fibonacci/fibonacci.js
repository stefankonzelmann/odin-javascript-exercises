const fibonacci = function(fNum) {
    if (fNum < 0 ) return 'OOPS'
    if (fNum <= 2) return 1
    return fibonacci(fNum -1) + fibonacci (fNum -2)
};

// Do not edit below this line
module.exports = fibonacci;
