const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let lvl = 1;

    function look(arr) {
      arr.forEach(element => {
        // console.log(element);
        if (element instanceof Array) {
          lvl++;
          // console.log(lvl);
          look(element);
        }
      });

    }
    look(arr);

    return lvl;
  }
}

module.exports = {
  DepthCalculator
};
