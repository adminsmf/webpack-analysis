
        (function(modules) {
          function require(fileName) {
            const fn = modules[fileName];
            const module = { exports:{}};
            fn(require, module, module.exports)
            return module.exports
          }
          require('E:\project\webpack-test\customize-webpack\src\index.js')
        })({'E:\project\webpack-test\customize-webpack\src\index.js' : function(require, module, exports) {"use strict";

var _greeting = require("./greeting.js");

/*
 * @Author: ray_sun
 * @Date: 2020-12-02 10:56:50
 */
document.write((0, _greeting.greeting)("森林"));},'./greeting.js' : function(require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = greeting;

/*
 * @Author: ray_sun
 * @Date: 2020-12-02 10:56:38
 */
// greeting.js
function greeting(name) {
  return "你好" + name;
}},})
    