const loaderUtils = require("loader-utils");

/**
 * 简单的loader
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
module.exports = function (content) {
  // 获取loader的参数
  let options = loaderUtils.getOptions(this);

  // 做一些处理，并返回即可
  this.callback(null, JSON.stringify(content.split(/\r\n|\r|\n/g)));
};
