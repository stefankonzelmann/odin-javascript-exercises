const removeFromArray = function (arr, val1, val2, val3, val4) {
  remove = [val1, val2, val3, val4];
  remove.forEach((value) => getAndRemoveIndex(arr, value));
  return arr;
};

function getAndRemoveIndex(arr, value) {
  let index = arr.indexOf(value);
  if (index != -1) {
    arr.splice(index, 1);
  }
}

// Do not edit below this line
module.exports = removeFromArray;
