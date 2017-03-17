module.exports = {
    "env": {
        "browser": true,
        "jquery":true
    },
    "plugins": [
        "dollar-sign",
        "jquery"
    ],
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab",
            {"MemberExpression": 1}
        ],
        "linebreak-style": [
            "error",
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};