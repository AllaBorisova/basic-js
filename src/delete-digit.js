const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    let count_arr = arr.filter((item, index) => {
      if (index !== i) { return item; }
    });
    new_arr.push(Number(count_arr.join('')));
  }
  return Math.max(...new_arr);

}

module.exports = {
  deleteDigit
};
