// polyfill for apply

// syntax
// function.apply(object,[arguments])

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

purchaseCar.apply(car, ["$", 500000]);

// polyfill

Object.defineProperty(Function.prototype, "_apply", {
  value: function (context = {}, args = []) {
    // Error checking
    if (typeof this !== "function") throw new Error("apply is not a function");
    if (!Array.isArray(args)) throw new Error(this + " called on non-object");

    // add function to context
    context.fn = this;

    // execute the function
    context.fn(...args);
  },
});
purchaseCar._apply(car, ["$", 500000]);
