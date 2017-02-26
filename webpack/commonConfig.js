/**
 * commonConfig
 */
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import context from './context'
import entry from './entry'
import path from 'path'
import webpack from 'webpack'

export default function commonConfig(production) {
	const devServer = {
		contentBase: path.join(__dirname, "../app"),
		compress: true,
		hot: true,
		host: '0.0.0.0',
		port: 9000
	}
	const devtool = production 
						? 'cheap-module-eval-source-map' 
						: 'eval-source-map'
	const output = {
		path: 'build',
		filename: '[name].min.js'
	}

	const resolve = {
		extensions: ['.js'],
		alias: {
			'common': path.join(context, 'common')
		}
	}

	const plugins = [
		new CommonsChunkPlugin({
			names: ['common'],
			minChunks: Infinity,
		}),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(production)
		}),
	]

	const target = 'web'

	return {
		context,
		devtool,
		devServer,	
		entry,
		output,
		plugins,
		resolve,
		target,
	}
}

