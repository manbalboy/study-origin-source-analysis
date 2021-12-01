module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'eslint:recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid', //가능하면 생략 , always 항상 써야한다.
        proseWrap: 'preserve',
        jsxBracketSameLine: false,
        htmlWhitespaceSensitivity: 'strict',
        vueIndentScriptAndStyle: true, // script 영역의 들여쓰기  true false
        endOfLine: 'auto',
      },
    ],
  },
};
