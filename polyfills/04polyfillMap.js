// polyfill for map method

const numArray = [1, 2, 3, 4];

const newArray = numArray.map((element, index, arr) => {
  console.log(`Element ${numArray[index]} at ${index} of array ${numArray}`);
  return numArray[index];
});

console.log(newArray);

// polyfill
Object.defineProperty(Array.prototype, "_map", {
  value: function (cb) {
    let modifiedArray = [];
    for (let i = 0; i < this.length; i++) {
      modifiedArray.push(cb(this[i], i, this));
    }
    return modifiedArray;
  },
});

const newArray2 = numArray._map((ele) => {
  return ele * 5;
});

console.log(newArray2);
