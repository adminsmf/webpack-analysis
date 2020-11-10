const path = require("path");

module.exports = {
  entry: "./main",

  mode: "none",
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       loader: path.resolve("./loader.js"),
  //       exclude: path.resolve(__dirname) + "./node_modules/", //排除哪个文件不转换
  //       options: { css: 123 }, //"presets:['es2015']"
  //     },
  //   ],
  // },
  // plugins: [
  //   new todayPlugin({
  //     test: 123,
  //   }),
  // ],

  output: {
    publicPath: "./dist/",
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
};
