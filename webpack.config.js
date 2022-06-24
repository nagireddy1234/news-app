const path = require('path');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    bundle: './src/index.tsx',
  },
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|gif|eot|ttf|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: '[name].js',
    // path: path.join(__dirname, '/dist'),
    // filename: 'static/js/[name].js',
    // publicPath: '/',
    
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.argv': JSON.stringify(process.argv),
    }),
  ],
  performance: {
    maxEntrypointSize: 750000,
    maxAssetSize: 750000,
  },
};

if (isDevelopment) {
  module.exports.plugins.push(
    new ReactRefreshPlugin(),
  );
}
