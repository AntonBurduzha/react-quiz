const autoprefixer = require('autoprefixer');
const prod = process.argv.indexOf('-p') !== -1;
const webpack = require('webpack');

let config = {
  entry: "./frontend/src/scripts/index",
  output: {
    path: __dirname + '/frontend/public/js',
    publicPath: '/js/',
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass', 'sasslint']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loaders: ['file-loader', 'url-loader?limit=100000']
      }
    ],
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  devServer: {
    contentBase: './frontend/public',
    proxy: {
      '*': {
        target: 'http://localhost:3000'
      }
    }
  }
};

config.plugins = config.plugins || [];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': "production"
    }
  }));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  config.watch = null;
  config.devtool = null;
} else {
  config.devtool = 'source-map';
}

module.exports = config;