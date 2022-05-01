const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let arr = str.split('');

  let st = '';

  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    let j = i + 1;
    while (arr[i] === arr[j]) {
      counter++;
      j++;

    }
    if (counter > 1) {
      st += counter + arr[i];
    } else {
      st += arr[i];
    }

    i = j - 1;

  }

  return st;

}

module.exports = {
  encodeLine
};
