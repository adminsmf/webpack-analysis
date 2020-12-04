/*
 * @Author: ray_sun
 * @Date: 2020-12-02 10:56:00
 */
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
};
