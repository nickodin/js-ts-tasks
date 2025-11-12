/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let newArr = [];
  function isEqualObjects(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    if (typeof a === 'object' && typeof b === 'object') {
      // если это объекты — сравнить значения по ключам
      const keysA = Object.keys(a);
      for (let i = 0; i < keysA.length; i++) {
        const k = keysA[i];
        if (a[k] !== b[k]) return false;
      }
      return true;
    }
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    // если оба — объекты или массивы → проверяем содержимое
    if ((typeof el === 'object' && typeof value === 'object')) {
      if (!isEqualObjects(el, value)) {
        newArr.push(el);
      }
    } else {
      // а вот здесь — твой “простой случай” сравнения примитивов
      if (el !== value) {
        newArr.push(el);
      }
    }
  }

  return newArr;
};
//console.log(module.exports.removeItems([[0], [0, 1], [0, 1, 2], [0, 1]], [0, 1]));
