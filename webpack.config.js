const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const fs = require('fs');

function getEntries() {
  const reg = /\.vue$/;
  return fs.readdirSync(path.resolve(__dirname, './src/component'))
    .filter(filename => reg.test(filename) && !fs.statSync(path.resolve(__dirname, './src/component', filename)).isDirectory())
    .map(filename => ({ [filename.replace(reg, '')]: path.resolve(__dirname, './src/component', filename) }));
}

const config = {
  mode: 'production',
  entry: { index: './src/components/Index.vue' },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: './[name].js',
    library: 'VueLoading',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      { test: /\.vue$/, exclude: /node_modules/, loader: 'vue-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              modules: false,
              targets: {
                browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
              },
            }],
            'stage-2',
          ],
          env: {
            test: {
              plugins: ['istanbul'],
            },
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
