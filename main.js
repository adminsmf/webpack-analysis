setTimeout(() => {
  require([], (require) => {
    let number = require("./number");

    console.log(number.n);
  });
}, 1000);
