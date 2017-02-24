/**
 * Load assets
 */
export default {
    module: {
        rules: [
			{
				test   : /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: 'file-loader?name=[name].[ext]',
			}
		]
    }
}