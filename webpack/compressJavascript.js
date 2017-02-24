/**
 * compress javascript
 */
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

export default {
    plugins: [
        new UglifyJSPlugin(),
    ]
}