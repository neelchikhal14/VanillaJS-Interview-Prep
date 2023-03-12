// Promise.all is a static method that takes array of Promises.
// On first rejected promises, further prmises wont execute
// The rejection reason is the first promises

// If all promises are fulfilled , then an array of promise fulfill

// The results are returened in same order as input supplied

// Edge Case -
// Empty Iterable -> return empty array

const _promiseAll = function (inputPromises) {
  // check for input as array
  if (!Array.isArray(inputPromises))
    throw new Error("Please enter promises in am array");

  const tasks = inputPromises.length;

  // check for empty input
  if (tasks === 0) return Promise.resolve([]);

  const results = [];
  let promisesCompleted = 0;

  // evaluate promises and finally return new promise

  return new Promise((resolve, reject) => {
    inputPromises.forEach((thePromise, idx) => {
      thePromise
        .then((val) => {
          results[idx] = val;
          promisesCompleted += 1;

          if (promisesCompleted === tasks) return resolve(results);
        })
        .catch((err) => reject(err));
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

_promiseAll([])
  .then((results) => {
    console.log("Heloo");
    console.log("got results", results);
  })
  .catch(console.error);
