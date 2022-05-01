const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) return false;
  let str = '';
  let new_arr = [];
  for (let i = 0; i < members.length; i++) {
    if ((typeof members[i]) === "string") {
      new_arr.push((members[i].replace(/\s/g, '')).toUpperCase());
    }
  }
  new_arr.sort();
  for (let i = 0; i < new_arr.length; i++) {
    str += new_arr[i][0];
  }
  return str;

}

module.exports = {
  createDreamTeam
};
