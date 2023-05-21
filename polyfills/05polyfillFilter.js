// polyfill for filter method

const numArray = [1, 2, 3, 4, 100];

const newArray = numArray.filter((ele, index, arr) => {
  if (ele % 2 === 0) {
    return ele;
  }
});

console.log(newArray);

// polyfill
Object.defineProperty(Array.prototype, "_filter", {
  value: function (cb) {
    let modifiedArray = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) modifiedArray.push(this[i]);
    }
    return modifiedArray;
  },
});

const newArray2 = numArray._filter((ele) => ele % 2 === 0);

console.log(newArray2);
