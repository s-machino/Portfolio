module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'prettier'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies:': 'off',
    'global-require': 'off',
  },
}
