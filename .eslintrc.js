module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint-plugin-vue',
    'eslint-plugin-nuxt',
    'slint-plugin-prettier',
    'eslint-config-prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies:': 'off',
    'global-require': 'off',
  },
};
