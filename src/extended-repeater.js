const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = ''
  // console.log(options.repeatTimes);
  let sep = (options.separator) ? options.separator : '+';
  let addsep = (options.additionSeparator) ? options.additionSeparator : '|';
  let rep = (options.repeatTimes) ? options.repeatTimes : 1;
  let addrep = 0;
  if (options.addition !== undefined) {
    addrep = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  }
  // console.log(sep);
  for (let i = 0; i < rep; i++) {
    let addstr = '';
    for (let j = 0; j < addrep; j++) {

      if (j === addrep - 1) {
        addstr += options.addition;
      } else {
        addstr += options.addition + addsep;
      }
    }
    if (i === rep - 1) {
      result += str + addstr;
    } else {
      result += str + addstr + sep;
    }

  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return result;
}

module.exports = {
  repeater
};
