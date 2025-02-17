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
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    'import/no-named-as-default': 0,
    'vue/multi-word-component-names': 0,
    'vue/order-in-components': 0,
  },
}
