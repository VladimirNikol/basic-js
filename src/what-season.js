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
  console.debug(date)
  console.debug(typeof(date))

  if (date == undefined){
    return 'Unable to determine the time of year!';
  } else if (typeof(date) != 'object'){
    console.debug("Invalid date!")
    return "Invalid date!";
  }

  console.debug(date.getMonth() + 1)
  let month = date.getMonth() + 1;

  if (month < 3){
    return 'winter'
  } else if (month < 6){
    return 'spring'
  } else if (month < 9){
    return 'summer'
  } else if(month < 12){
    return 'fall'
  } else {
    return 'winter'
  }
  
  return "true"
}

module.exports = {
  getSeason
};
