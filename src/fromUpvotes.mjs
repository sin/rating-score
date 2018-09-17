import lowerBound from './lowerBound'

/**
 * Calculates the score from the number of upvotes and downvotes.
 *
 * @private
 * @param {Number} zScore
 * @param {Number} upvotes - Number of positive reviews.
 * @param {Number} downvotes - Number of negative reviews.
 * @returns {Number} Calculated score (lower bound).
 */
const fromUpvotes = (zScore, upvotes, downvotes) =>
  lowerBound(zScore, upvotes, upvotes + downvotes)

export default fromUpvotes
