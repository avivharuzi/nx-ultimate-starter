module.exports = {
  extends: [
    'eslint:recommended',
    'vamp/javascript',
    'plugin:@typescript-eslint/recommended',
    'vamp/typescript',
    './rules/overrides.js',
    'prettier',
  ],
};
