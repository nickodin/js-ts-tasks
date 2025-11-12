/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i]) === false) {
      newArr.push(arr[i]);
    }
  }
  return newArr.length;
};

//console.log(module.exports.diffElems([1, 3, 6, 1, 5, 1, 1])); 
