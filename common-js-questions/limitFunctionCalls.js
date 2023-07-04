// Implement a function that accepts a callback and restricts its invocation to at most N times | Lodash Polyfills | Frontend Problem Solving
// In this question, you need to create a function that accepts a callback restricts its invocation to the provided n times. It is similar to the _.before
// method provided by the Lodash library.

// Calls to the function after the limit should return the value of the last invocation. The callback is invoked with the this binding and arguments
// of the created function.

function limit(callback, n) {
  // write your code below

  let invokedCount = 0;
  let context = this;
  return function (args) {
    if (invokedCount >= n) console.log(`Callback invocation max is ${n}`);
    else {
      invokedCount++;
      callback.apply(context, args);
    }
  };
}

const limitedFunc = limit(function () {
  console.log("I executed");
}, 2);

limitedFunc();
limitedFunc();
limitedFunc();
