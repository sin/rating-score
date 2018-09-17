import { curry } from './utils'
import getZScore from './zScore'

/**
 * Returns a curried score function with precalculated z-score.
 *
 * @private
 * @param {Function} fn - Function calculating score.
 * @returns {Function}
 */
const createScoreFunction = (fn) => (confidence, ...args) => {

  const zScore = getZScore(confidence)
  return curry(fn)(zScore, ...args)
}

export default createScoreFunction
