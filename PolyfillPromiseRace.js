// Promise.race is a static method that takes array of Promises and return a single promise
// This returned promise settles with the eventual state of the first promise that settles.
// In other words, it fulfills if the first promise to settle is fulfilled, and rejects if the first promise to settle is rejected
// The Promise.race() method is one of the promise concurrency methods. It's useful when you want the first async task to complete,
// but do not care about its eventual state (i.e. it can either succeed or fail).
// Edge Case -
// Empty Iterable -> return empty array

const _promiseRace = (promiseArray) => {
  const totalPromises = promiseArray.length;
  let completedPromises = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < totalPromises; i++) {
      promiseArray[i].then(resolve).catch(reject);
    }
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

let task1 = Promise.reject(111);
let task2 = Promise.resolve(222);
let task3 = Promise.resolve(333);
// const taskList = [task(1000), task(5000), task(3000)];
const taskList2 = [task1, task2, task3];

_promiseRace(taskList2)
  .then((results) => {
    console.log("Heloo");
    console.log("got results", results);
  })
  .catch((err) => console.log(error));
