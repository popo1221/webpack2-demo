/**
 * Webpack config javascript.
 */
import commonConfig from './webpack/commonConfig'
import compileJavascript from './webpack/compileJavascript'
import compressJavascript from './webpack/compressJavascript'
import extractCss from './webpack/extractCss'
import lintJavascript from './webpack/lintJavascript'
import loadAsset from './webpack/loadAsset'
import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'

export default function webpackConfig(env) {
    return merge(
        commonConfig(env.production),
        lintJavascript,
        compileJavascript,
        extractCss,
        loadAsset,
        compressJavascript
    )
}