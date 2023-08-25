module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		project: './tsconfig.eslint.json',
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/no-throw-literal": "off",
		"@typescript-eslint/explicit-function-return-type": "off"
	}
};
