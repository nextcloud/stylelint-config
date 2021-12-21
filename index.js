module.exports = {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-recommended-vue',
	],
	ignoreFiles: ['**/*.js', '**/*.ts'],
	rules: {
		indentation: 'tab',
		'selector-type-no-unknown': null,
		'number-leading-zero': null,
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'inside-block'],
			},
		],
		'declaration-empty-line-before': [
			'never',
			{
				ignore: ['after-declaration'],
			},
		],
		'comment-empty-line-before': null,
		'selector-type-case': null,
		'selector-list-comma-newline-after': null,
		'no-descending-specificity': null,
		'string-quotes': 'single',
		'selector-pseudo-element-no-unknown': [
			true,
			{
				// Vue v-deep pseudo-element
				ignorePseudoElements: ['v-deep'],
			},
		],
	},
	plugins: ['stylelint-scss'],
}
