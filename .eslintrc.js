module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'jest'],
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    rules: {
        'no-console': 2,
        'prettier/prettier': [2, { endOfLine: 'auto' }],
        curly: [2, 'all'],
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0
    }
};
