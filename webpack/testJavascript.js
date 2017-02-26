export default {
	module: {
		rules: [{
			test: /\.spec.js$/,
            enforce: 'post',
			use: 'mocha-loader',
			exclude: /node_modules/,
		}, ]
	}
}
