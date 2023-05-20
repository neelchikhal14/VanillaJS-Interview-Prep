// polyfill for bind

// syntax
// fn = function.bind(object,arguments)

let car = {
  color: "red",
  company: "ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    "I purchased " +
      this.color +
      " color " +
      this.company +
      " at " +
      currency +
      price
  );
}

const purchaseCarBind = purchaseCar.bind(car, "$", 500000);
purchaseCarBind();

// polyfill

Object.defineProperty(Function.prototype, "_bind", {
  value: function (context = {}, ...args) {
    // error checking
    if (typeof this !== "function") throw new Error("apply is not a function");

    // add function to object
    context.fn = this;

    return function (...secondaryArgs) {
      // execute the function
      context.fn(...args, ...secondaryArgs);
    };
  },
});

const purchaseCarBind2 = purchaseCar._bind(car, "$");
purchaseCarBind2(500000);
