
export default {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    exclude: /node_modules/,
                    options: {
                        emitWarning: true,
                    },
                }
            ]
        }
    }