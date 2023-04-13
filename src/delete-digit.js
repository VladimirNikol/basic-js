const {NotImplementedError} = require('../extensions/index.js');

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
    const arr = Array.from(String(n))
    const arrNum = []
    let temp = []

    for (let i = 0; i < arr.length; i++) {
        temp = arr.slice()
        temp.splice(i, 1)
        arrNum.push(+temp.join(''))
    }
    getMaxOfArray(arrNum)
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    console.debug(getMaxOfArray(arrNum))
    return getMaxOfArray(arrNum)
}

module.exports = {
    deleteDigit
};
