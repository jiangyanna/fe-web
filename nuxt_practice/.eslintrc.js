// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    // sourceType: 'module'
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  globals: {
    window: true,
    document: true,
    rlog: true,
    relog: true,
    _app: true,
    CONST: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: 'standard',
  extends: [
    // 'eslint:recommended',
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
  ],
  // add your custom rules here
  'rules': {
    "quotes": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': 0,
    "eqeqeq": 0 ,
    "one-var":0,
    "template-curly-spacing": "off"
  }
}
