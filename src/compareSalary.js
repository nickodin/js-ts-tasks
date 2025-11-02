/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let minNumber = Math.min(firstSalary, secondSalary, thirdSalary);
  let maxNumber = Math.max(firstSalary, secondSalary, thirdSalary);
  return maxNumber - minNumber;
};
