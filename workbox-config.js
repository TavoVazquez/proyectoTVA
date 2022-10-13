module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,css,jpg,jfif,js,gif,php,txt,json,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};