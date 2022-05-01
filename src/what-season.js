const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (typeof date === 'undefined') return 'Unable to determine the time of year!';

  if (((new Date(date) !== "Invalid Date")
    && !isNaN(new Date(date))) !== true) {
    throw new Error("Invalid date!");
  }

  if (Object.keys(date).length) {
    throw new Error("Invalid date!");
  }

  try {
    let month = date.getMonth();
    let season = '';
    switch (month) {
      case 0: case 1: case 11: season = 'winter'; break;
      case 2: case 3: case 4: season = 'spring'; break;
      case 5: case 6: case 7: season = 'summer'; break;
      default: season = 'autumn'; break;
    }
    return season;
  }
  catch {
    throw new Error("Invalid date!");
  }

}

module.exports = {
  getSeason
};
