const { SyncHook } = require("tapable");

/**
 * 自定义的插件
 */
class todayPlugin {
  constructor(options) {
    // 获取插件的参数
    this.options = options;

    console.log("plugin-options", this.options);
  }

  /**
   * 提供webpack对插件进行调用
   * @param  {[type]} compiler [description]
   * @return {[type]}          [description]
   */
  apply(compiler) {
    compiler.hooks.emit.tap("MyWebpackPlugin", (compilation) => {
      console.log(compilation);
    });
  }
}

module.exports = todayPlugin;
