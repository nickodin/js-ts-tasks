/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let number = Math.abs(n).toString().split("").map(Number);

  let sum = 0;
  for (let i = 0; i < number.length; i++){
    sum = sum + number[i];
  }
  return sum;
};



