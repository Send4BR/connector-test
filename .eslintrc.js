module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "plugins": ["jest"],
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "camelcase": "off"
    }
};
