// currying is function that takes one argument at a time and returns a new function

// f(a,b) => f(a)(b)

function add(a, b) {
  console.log(a + b);
}

function curriedAdd(a) {
  return function (b) {
    console.log(a + b);
  };
}

add(5, 6);
curriedAdd(10)(3);

// Infinite Currying
// f(a)(b)(c).... ()

function infiniteCurry(a) {
  return function (b) {
    if (b) return infiniteCurry(a + b);
    return a;
  };
}

// Write a curry function which takes fn as an input
// and converts f(a,b,c) -> f(a)(b)(c)

function curry(fn) {
  return function curriedFunc(...args) {
    if (fn.length >= args.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curriedFunc(...args, ...nextArgs);
      };
    }
  };
}
