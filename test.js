var o = {
  a: 1,
};

let value = 1;
Object.defineProperty(o, "a", {
  get() {
    return value++;
  },
});

console.log(o.a === 1 && o.a === 2 && o.a === 3); // 123
