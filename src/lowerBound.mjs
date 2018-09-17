/**
 * Calculates lower bound of Wilson score confidence interval for a Bernoulli parameter.
 * This is the score that we want to use to sort our things by.
 *
 * Read more in an article by Evan Miller
 * [How Not To Sort By Average Rating](@link https://www.evanmiller.org/how-not-to-sort-by-average-rating.html).
 *
 * @private
 * @param {Number} z - Z-score.
 * @param {Number} p - Number of positive reviews (upvotes).
 * @param {Number} n - Number of all reviews (upvotes + downvotes).
 * @returns {Number} Calculated score (lower bound).
 */
const lowerBound = (z, p, n) => {

  const z2 = Math.pow(z, 2)
  const p̂ = p / n

  return (
    (
      p̂ + z2 / (2 * n) - z *
      Math.sqrt((p̂ * (1 - p̂) + z2 / (4 * n)) / n)
    ) / (1 + z2 / n)
  )
}

export default lowerBound
