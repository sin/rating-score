import { probit } from 'simple-statistics'

const curry = (fn) => {

  const len = fn.length
  let args = []

  return function next() {

    args = [...args, ...arguments]
    return (args.length >= len) ? fn.apply(this, args) : next
  }
}

const getZScore = (num = 0.95) => {

    const confidence = Math.min(Math.max(num > 1 ? num / 100 : num, 0), 1)

    return +probit(1 - (1 - confidence) / 2).toFixed(2)
}

const getLowerBound = (z, p, n) => {

    const z2 = Math.pow(z, 2)
    const p̂ = p / n

    return (p̂ + z2 / (2 * n) - z * Math.sqrt((p̂ * (1 - p̂) + z2 / (4 * n)) / n)) / (1 + z2 / n)
}

const createScoreFunction = (fn) => (confidence, ...args) => {

    const zScore = getZScore(confidence)
    return curry(fn)(zScore, ...args)
}

const weightStars = (result, stars, rating, { length }) =>
    result += stars * rating / (length - 1)

const fromUpvotes = (zScore, upvotes, downvotes) =>
    getLowerBound(zScore, upvotes, upvotes + downvotes)

const fromAverage = (zScore, averageRating, maxRating, totalRatings) =>
    getLowerBound(zScore, averageRating * totalRatings / maxRating, totalRatings)

const fromStars = (zScore, starsList) => {

    const positiveRatings = starsList.reduce(weightStars, 0)
    const totalRatings = starsList.reduce((a, b) => a + b, 0)

    return getLowerBound(zScore, positiveRatings, totalRatings)
}

export const averageToScore = createScoreFunction(fromAverage)
export const starsToScore = createScoreFunction(fromStars)
export const upvotesToScore = createScoreFunction(fromUpvotes)
