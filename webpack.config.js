const path = require("path");

module.exports = {
  entry: {
    main: "./main",
    // main1: './main1'
  },

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
  optimization: {
    concatenateModules: true,
    // 提取runtime代码到common.js文件中
    runtimeChunk: {
      name: 'common'
    },
    // 提取公共部分为common.js，使劲地提取吧.. 
    splitChunks: {
        name: 'common',
        chunks: 'all',
        minSize: 1
    }
  },

  output: {
    publicPath: "./dist/",
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
};
