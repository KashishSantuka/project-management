module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [ ],
  ignorePatterns: [],
  "parser": "babel-eslint",
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
