module.exports = {
	extends: ["react-app"],
	rules: {},
	overrides: [
		{
			files: ["**/*.js?(x)"],
			rules: {
				// ******** add ignore rules here *********
				"no-unused-vars": "off",
			},
		},
	],
};
