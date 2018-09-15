import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const input = 'src/index.mjs'
const sourcemap = true
const external = ['simple-statistics']
const plugins = [ resolve() ]
const babelConfig = {
    babelrc: false,
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env']
}

export default [{
    input,
    output: {
        file: 'dist/rating-score.mjs',
        format: 'es',
        sourcemap
    },
    external,
    plugins
}, {
    input,
    output: {
        file: 'dist/rating-score.js',
        format: 'cjs',
        sourcemap
    },
    external,
    plugins
},
{
    input,
    output: {
        file: 'dist/rating-score.min.js',
        format: 'iife',
        name: 'RatingScore'
    },
    plugins: [
        resolve(),
        babel(babelConfig)
    ]
}]