// pollyfill for call

// syntax

// function.call(object,comma_seperated_args)

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

purchaseCar.call(car, "$", 500000);

// polyfill -- Non destructive way of modifying prototypal chain
Object.defineProperty(Function.prototype, "_call", {
  value: function (context = {}, ...args) {
    //check if call is on a function
    if (typeof this !== "function") throw new Error("Not a function");

    // add function to object (context)
    context.fn = this;

    // call the function
    context.fn(...args);
  },
});

purchaseCar._call(car, "$", 500000);
