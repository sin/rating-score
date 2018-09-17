import lowerBound from './lowerBound'

/**
 * Calculates the score from the average of all reviews.
 *
 * This works by converting the average to a number of positive
 * reviews, so the lower bound method can be used.
 *
 * @private
 * @param {Number} zScore
 * @param {Number} averageRating - Average review score.
 * @param {Number} maxRating - Maximum review score.
 * @param {Number} totalReviews - Total number of reviews.
 * @returns {Number} Calculated score (lower bound).
 */
const fromAverage = (zScore, averageRating, maxRating, totalRatings) =>
  lowerBound(zScore, averageRating * totalRatings / maxRating, totalRatings)

export default fromAverage
