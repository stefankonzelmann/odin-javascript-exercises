const palindromes = function (string) {
    const remove = [" ", ",", ".", "!"]
    const inputClean = Array.from(string.toLowerCase()).filter(char => !remove.includes(char)).join("")
    return inputClean === inputClean.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
