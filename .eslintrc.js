/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@edgeandnode'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
