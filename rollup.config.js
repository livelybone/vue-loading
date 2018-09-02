import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const { NODE_ENV = '' } = process.env
const formats = ['amd', 'cjs', 'es', 'iife', 'umd', 'system']

export default {
  input: './src/components/Index.vue',
  output: formats.filter(format => (NODE_ENV !== 'production' || format !== 'es')).map(format => ({
    file: `./lib/index.${format}.${NODE_ENV === 'production' ? 'min.' : ''}js`,
    format,
    name: 'VueLoading',
  })),
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
        'external-helpers',
      ],
    }),
    (NODE_ENV === 'production' && uglify()),
  ],
}
