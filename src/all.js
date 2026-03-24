/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (promisesArray.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(promisesArray.length);
    let resolvedCount = 0;

    promisesArray.forEach((promise, index) => {
      promise
        .then(result => {
          results[index] = result;
          resolvedCount += 1;

          if (resolvedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
