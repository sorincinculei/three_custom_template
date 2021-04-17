const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const publicPath = '/';

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist'),
        publicPath: publicPath
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      overlay: true,
      port: 5000,
      contentBase: [
        path.join(__dirname, 'dist'),
      ],
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Three Custom',
          template: 'src/template.html'
        })
    ]
}