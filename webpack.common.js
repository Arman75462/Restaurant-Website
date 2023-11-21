const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
  },

  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|xcf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(webp|avif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // Convert to data URL if file size is smaller than 10 KB
          },
        },
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/menu.html",
      filename: "menu.html",
      chunks: ["menu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
  ],
};
