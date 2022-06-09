module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
			'module:metro-react-native-babel-preset',
			'@babel/preset-env',
			['@babel/preset-react', { runtime: 'automatic' }],
		],
		plugins: [
			'react-native-classname-to-style',
			[
				'react-native-platform-specific-extensions',
				{ extensions: ['scss', 'css'] },
			],
		],
	};
};
