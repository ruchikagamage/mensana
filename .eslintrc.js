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
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
};
