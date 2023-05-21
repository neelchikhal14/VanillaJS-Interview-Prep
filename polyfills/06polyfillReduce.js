// polyfill for reduce method

const numArray = [1, 2, 3, 4, 100];

const reducedVal = numArray.reduce((acc, ele) => acc + ele, 0);

console.log(reducedVal);
// polyfill
Object.defineProperty(Array.prototype, "_reduce", {
  value: function (cb, initialValue) {
    let accumalator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];
    }
    return accumalator;
  },
});

const reducedVal2 = numArray._reduce((acc, ele) => acc + ele, 0);

console.log(reducedVal2);
