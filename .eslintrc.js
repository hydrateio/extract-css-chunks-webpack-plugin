module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: ['@webpack-contrib/eslint-config-webpack'],
    globals: {
        document: true
    },
    rules: {
        'prettier/prettier': [
            'error',
            { singleQuote: true, trailingComma: 'es5', arrowParens: 'always' },
        ],
        'class-methods-use-this': 'off',
        'no-undefined': 'off',
    },
};
