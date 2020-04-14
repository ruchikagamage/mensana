module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        // 'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {ecmaVersion: 6},
};
