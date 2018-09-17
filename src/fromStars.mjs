import lowerBound from './lowerBound'

/**
 * Sums reviews weighted by number of stars. The weight is calculated
 * by dividing number of stars (counting from zero) by the maximum
 * number of stars minus 1. In effect, the worst reviews get a weight
 * of 0, and full stars reviews get weight equal to 1.
 *
 * For example, for a 5 stars rating system the weights are as follows:
 * 5 stars - 1
 * 4 stars - 0.75
 * 3 stars - 0.50
 * 2 stars - 0.25
 * 1 star  - 0
 *
 * @private
 * @param {Number} result - Sum of weighted ratings.
 * @param {Number} reviews - Number of reviews with given number of stars.
 * @param {Number} stars - Number of stars (counts from 0).
 * @param {Number[]} starsList - List of review counts.
 * @returns {Number} Calculated score (lower bound).
 */
const weightStars = (result, reviews, stars, { length }) =>
  result += reviews * stars / (length - 1)

/**
 * Calculates the score (lower bound) from a list of review counts.
 *
 * The lower bound method can't be used with a non-binary
 * rating systems, so the ratings are weighted and reduced
 * to a single number of "positive" reviews, where the neutral
 * reviews are counted as a fraction of a positive review.
 *
 * @private
 * @param {Number} zScore
 * @param {Number[]} starsList - List of review counts.
 * @returns {Number} Calculated score (lower bound).
 */
const fromStars = (zScore, starsList) => {

  const positiveReviews = starsList.reduce(weightStars, 0)
  const totalReviews = starsList.reduce((a, b) => a + b, 0)

  return lowerBound(zScore, positiveReviews, totalReviews)
}

export default fromStars

