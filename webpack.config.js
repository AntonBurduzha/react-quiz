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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', 'sasslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ['file-loader', 'url-loader?limit=100000']
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({ browsers: ['last 2 versions'] })
        ],
        eslint: {
          configFile: './.eslintrc'
        }
      }
    })
  ],
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
  config.watch = false;
  config.devtool = false;
} else {
  config.devtool = 'source-map';
}

module.exports = config;