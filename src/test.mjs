import { averageToScore, starsToScore, upvotesToScore } from './index'

console.log(averageToScore(0.95)(4.5, 5, 100))
console.log(starsToScore(0.95)([10, 0, 0, 0, 90]))
console.log(upvotesToScore(0.95)(90, 10))

console.log(averageToScore(0.95, 2.5, 5, 100))
console.log(starsToScore(0.95, [0, 0, 100, 0, 0]))
console.log(upvotesToScore(0.95, 50, 50))
