/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  let differenceX = secondPoint.X - firstPoint.X;
  let differenceY = secondPoint.Y - firstPoint.Y;
  let distance = Math.sqrt(differenceX * differenceX + differenceY * differenceY);
  return Number(distance.toFixed(2));
};
