import { probit } from 'simple-statistics'
import { clamp, roundToTwo } from './utils'

/**
 * Returns the number of standard deviations above or below the mean
 * by which the value can be found in a normal distribution with
 * a given confidence.
 *
 * @private
 * @param {Number} [confidence=0.95] - Probability as fraction or percentage.
 * @returns {Number} Calculated z-score.
 */
const zScore = (num = 0.95) => {

  if (num === 0) {
    return 0
  }

  const confidence = clamp(num > 1 ? num / 100 : num)

  return roundToTwo(probit(1 - (1 - confidence) / 2))
}

export default zScore
