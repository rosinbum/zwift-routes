const path = require('path');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const configuration = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CleanPlugin(),
    new HtmlPlugin({
      title: 'Zwift Routes',
      template: 'public/index.html'
    }),
    new CopyPlugin([
      { from: 'public', to: '',ignore: [ 'index.html' ] }
    ])
  ]
};

if (isProduction) {
  configuration.optimization = {
    minimize: isProduction,
    minimizer: [ 
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        sourceMap: true
      })
    ],
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    }
  };
} else {
  configuration.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    overlay: true
  };
}

module.exports = configuration;
