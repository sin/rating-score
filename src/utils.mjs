/**
 * Rounds a number to two decimal places.
 *
 * @private
 * @param {Number} num - A number to round.
 * @returns {Number} Rounded number.
 */
export const roundToTwo = (num) => Math.round(num * 100) / 100

/**
 * Clamps a number to 0-1 range.
 *
 * @private
 * @param {Number} num - A number to clamp.
 * @returns {Number} Clamped number.
 */
export const clamp = (num) => Math.min(Math.max(num, 0), 1)

/**
 * Returns a curried equivalent of the provided function.
 *
 * @private
 * @param {Function} fn - The function to curry.
 * @returns {Function} A new, curried function.
 */
export const curry = (fn) => {

  const len = fn.length
  let args = []

  return function next() {

    args = [...args, ...arguments]
    return (args.length >= len) ? fn.apply(this, args) : next
  }
}
