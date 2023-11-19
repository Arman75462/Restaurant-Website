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
        test: /(png|svg|jpg|jpeg|gif|xcf)$/i,
        type: "asset/resource",
      },
      {
        test: /(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
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
