module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 0,
    'prefer-rest-params': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-use-before-define': 0,
    'import/no-import-module-exports': 0,
    'no-multi-assign': 0,
    'no-prototype-builtins': 0,
    'no-undef': 0,
    'consistent-return': 0,
    'no-unused-vars': 0,
  },
};
