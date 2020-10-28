

const OFF = 0,
    WARN = 1,
    ERROR = 2;

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jquery: true,
        mocha: true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        parser: 'babel-eslint',
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'allowImportExportEverywhere': true
    },
    'rules': {
        'array-bracket-spacing' : [ ERROR, 'always' ],
        'space-in-parens': [ ERROR, 'always' ],
        'indent': [ ERROR, 4 ],
        'linebreak-style': [ ERROR, 'unix' ],
        'quotes': [ ERROR, 'single' ],
        'semi': [ ERROR, 'always' ],
        'keyword-spacing': [ ERROR, { before: true, after: true } ],
        'no-console': OFF,
        'no-underscore-dangle': OFF,
        'no-plusplus': [ ERROR, { allowForLoopAfterthoughts: true } ],
        'no-unused-vars': [ ERROR, { argsIgnorePattern: 'next' } ],
        'no-use-before-define': [ ERROR, { variables: false } ],
        'no-multi-str': WARN,
        'comma-spacing': [ OFF, { before: false, after: true } ],
        'camelcase': OFF,
        'strict': ERROR,
        'eqeqeq': ERROR,
        'no-param-reassign': [ ERROR, { props: false } ],
        'prefer-destructuring': [ ERROR, { array: false, object: false } ],
        'space-before-blocks': [
            ERROR,
            { functions: 'always', keywords: 'always', classes: 'always' }
        ],
    }
};
