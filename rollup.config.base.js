/* For build */
const babel = require('rollup-plugin-babel')
const vuePlugin = require('rollup-plugin-vue')

const vue = vuePlugin.default || vuePlugin

module.exports = {
  output: {
    format: 'umd',
  },
  external: [],
  plugins: [
    vue({ css: true }),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      externalHelpers: false,
      presets: [
        ['env', { modules: false }],
        'stage-2',
      ],
      plugins: [
        'array-includes',
        'external-helpers',
      ],
    }),
  ],
}
