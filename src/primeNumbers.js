/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (from, to) {
    const result = [];
    const max = Math.min(to, highestNumber);
    const min = from;
    function isPrime(n) {
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    for (let num = min; num <= max; num++) {
      if (isPrime(num)) {
        result.push(num);
      }
    }

    return result;
  };
};
