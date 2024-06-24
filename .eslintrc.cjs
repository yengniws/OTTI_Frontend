module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    overrides: [{
        env: {
            node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
            sourceType: 'script',
        },
    }, ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        parser: 'babel-parser',
    },
};