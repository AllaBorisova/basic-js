const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i)
    if (arr[i] === '--double-next') {
      if ((i + 1) < arr.length && (typeof arr[i + 1] === 'number')) {
        new_arr.push(arr[i + 1]);
      }
    } else
      if (arr[i] === '--double-prev') {

        if ((i - 1) >= 0 && (typeof arr[i - 2] === 'number')) new_arr.push(arr[i - 1]);
      } else
        if (arr[i] === '--discard-next') {
          i++;

        } else
          if (arr[i] === '--discard-prev') {
            if (typeof arr[i - 1] === 'number') new_arr.pop();
          } else {
            new_arr.push(arr[i]);
          }

  }
  return new_arr;
}

module.exports = {
  transform
};
