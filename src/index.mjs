import createScoreFunction from './createScoreFn'

import fromAverage from './fromAverage'
import fromStars from './fromStars'
import fromUpvotes from './fromUpvotes'

/**
 * Calculates the score from the average of all reviews.
 *
 * This function is curried.
 *
 * @function
 * @param {Number} confidence
 * @param {Number} averageRating - Average review score.
 * @param {Number} maxRating - Maximum review score.
 * @param {Number} totalReviews - Total number of reviews.
 * @returns {Number} Calculated score.
 */
export const averageToScore = createScoreFunction(fromAverage)

/**
 * Calculates the score from a list of review counts.
 *
 * This function is curried.
 *
 * @function
 * @param {Number} confidence
 * @param {Number} starsList - List of review counts.
 * @returns {Number} Calculated score.
 */
export const starsToScore = createScoreFunction(fromStars)

/**
 * Calculates the score from the number of upvotes and downvotes.
 *
 * This function is curried.
 *
 * @function
 * @param {Number} confidence
 * @param {Number} upvotes - Number of positive reviews.
 * @param {Number} downvotes - Number of negative reviews.
 * @returns {Number} Calculated score (lower bound).
 */
export const upvotesToScore = createScoreFunction(fromUpvotes)
