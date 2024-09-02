const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

process.env["NODE_ENV"] = "production";

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: 'app.js', // Name of the output file
    path: path.resolve(__dirname, 'build'), // Directory to output files
    publicPath: '/', // Public URL of the output directory when referenced in a browser
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
