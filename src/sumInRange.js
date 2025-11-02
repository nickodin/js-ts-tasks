/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start); // start =+start
  end = Number(end); // end = +end
  if (start > end) {
   [start, end] = [end, start];
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
};
