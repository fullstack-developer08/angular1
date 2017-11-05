# gulp-pug
> using gulp plugin for compiling pug templates

** intsall gulp in our system
`
npm install -g gulp
`

** install gulp locally (Project/folder wise)
`
npm install gulp
`

** install gulp-eslint locally
`
npm install gulp-eslint
`

** run eslint
`
gulp eslint
`

** to run eslint proper we need to create .eslintrc.js
```javascript
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
```