// Promise.any is a static method that takes array of Promises and return a single promise
// The first fulfilled promise among all of them is returned
// if all are rejected then it gives a special error AggregateError containing array of rejection reasons

// Edge Case -
// Empty Iterable -> return empty array

const _promiseAny = (promiseArray) => {
  // check if array is supplied
  if (!Array.isArray(promiseArray))
    return new Error("TypeError: Argument of Promise.any is not iterable");

  const aggregateError = [];
  const totalPromises = promiseArray.length;
  let promisesExecuted = 0;

  return new Promise((resolve, reject) => {
    promiseArray.forEach((thePromise, idx) => {
      thePromise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          aggregateError.push(err);
          promisesExecuted += 1;
          // if all the promises are rejected then return aggregateError
          if (promisesExecuted === totalPromises) reject(aggregateError);
        });
    });
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

let task1 = Promise.resolve(111);
let task2 = Promise.resolve(222);
let task3 = Promise.resolve(333);
// const taskList = [task(1000), task(5000), task(3000)];
const taskList2 = [task1, task2, task3];

_promiseAny(taskList2)
  .then((results) => {
    console.log("Heloo");
    console.log("got results", results);
  })
  .catch((err) => console.log(error));
