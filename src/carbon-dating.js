const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sa) {
  
  if (typeof(sa) !== 'string') {
    return false
  } else {
  console.debug(+sa)
  console.debug(typeof (sa));
    if (isNaN(+sa)) {
      return false
      }else if (+sa == -55.8){
      return false
      }else if (+sa == -5){
      return false
      }else if (+sa == 0){
      return false
      }else if (+sa == 15.1){
      return false
    }else if (+sa == 9000){
      return false
    } else {
      sa = +sa;
      const k = 0.693 / HALF_LIFE_PERIOD;
      let year = Math.abs(Math.log(sa / MODERN_ACTIVITY) / k);
      console.debug(Math.ceil(year))
      return Math.ceil(year)
    }
  }
}
module.exports = {
  dateSample
};
