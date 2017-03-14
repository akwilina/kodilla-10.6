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
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
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