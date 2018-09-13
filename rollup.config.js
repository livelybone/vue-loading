/* For build */
import { uglify } from 'rollup-plugin-uglify'

const baseConf = require('./rollup.config.base')

const conf = entry => Object.assign({}, baseConf, {
  input: entry.filename,
  output: entry.formats.map(format => ({
    file: `./lib/${format}/${entry.name}.js`,
    format,
    name: 'VueLoading',
  })),
  plugins: baseConf.plugins.concat([(entry.needUglify !== false && uglify())]),
})

export default [
  {
    name: 'index',
    filename: './src/components/Index.vue',
    formats: ['es'],
    needUglify: false,
    external: true,
  },
  { name: 'index', filename: './src/components/Index.vue', formats: ['umd'] },
].map(conf)
