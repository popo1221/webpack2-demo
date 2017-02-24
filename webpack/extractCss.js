/** 
 *  compile css
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
    module: {
        rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader']
                    }),
                },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].min.css'),
    ]
}