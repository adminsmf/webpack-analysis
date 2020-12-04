/*
 * @Author: ray_sun
 * @Date: 2020-12-02 11:05:59
 */
const Compiler = require("./compiler");
const options = require("../forestpack.config");

new Compiler(options).run();
