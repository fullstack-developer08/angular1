module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "angular": true,
        "require": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error","tab"],
        "linebreak-style": 0,
        "quotes": ["error","double"],
        "semi": ["error","always"],
        "quotes": ["warn", "single", {"avoidEscape": true}],
        "indent": ["warn", 4, {"MemberExpression": 1}]
    }
};