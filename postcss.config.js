const postcssImport = require('postcss-import');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const stylelint = require('stylelint');

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 7',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = function plugins(bundler) {
	return {
		plugins: [
			postcssImport({
				addDependencyTo: bundler,
			}),	
			precss(),
			cssnext({
				browsers: AUTOPREFIXER_BROWSERS
			}), 
			stylelint(),
		]
	}
};
