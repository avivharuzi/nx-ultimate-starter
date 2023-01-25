const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: path.join(__dirname, '..'),
  },
  plugins: [
    'max-params-no-constructor',
    '@typescript-eslint',
    '@nrwl/nx',
    'unused-imports',
  ],
};
