const baseWebpackConfig = require('../webpack/webpack.base.conf')

module.exports = async ({ config }) => ({
	...config,
	resolve: {
		...config.resolve,
		alias: {
			...config.resolve.alias,
			...baseWebpackConfig.resolve.alias
		}
	}
})