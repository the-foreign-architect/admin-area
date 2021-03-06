module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/standard"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "quotes": [2, "single", { "avoidEscape": true }],
    "prettier/prettier": ["error", { "singleQuote": true }]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ]
};
