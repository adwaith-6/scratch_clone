const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Add this line

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "app.js", // Make sure to specify the filename here
    path: path.resolve(__dirname, "build"), // Change the output path to 'build'
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css', // Extract CSS to a file
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'), // Path to your index.html
      filename: 'index.html', // Output filename
    }),
  ],
};
