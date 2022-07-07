// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  plugins: ['import'],
  extends: [
    '@rushstack/eslint-config/profile/node',
    'plugin:react-hooks/recommended',
    '../../.eslintrc.js',
  ],
  parserOptions: { tsconfigRootDir: __dirname, ecmaVersion: 2017 },
}
