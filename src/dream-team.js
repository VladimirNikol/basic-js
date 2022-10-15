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
  console.debug(members);
  let team = '';
  let arr = [];

  if (!Array.isArray(members)) {
    return false
  } else if (members.length == 0) {
    return false
  } else {
    members.forEach(el => {
      if (typeof(el) == 'string'){
      arr.push(el.trim());
      }
    });
    members = arr;
    members = members.sort();
    console.debug(members);
    members.forEach(el => {
      team += el[0];
      team = team.toUpperCase().split('').sort().join('');
    });
  }
  console.debug(team)
  return team
}

module.exports = {
  createDreamTeam
};
