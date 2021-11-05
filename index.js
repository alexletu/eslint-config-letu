// Workaround for https://github.com/eslint/eslint/issues/3458
require(`@rushstack/eslint-patch/modern-module-resolution`);

module.exports = {
  extends: [
    `./rules/base`,
  ].map(require.resolve),
  parser: require.resolve(`@typescript-eslint/parser`),
  env: {
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
