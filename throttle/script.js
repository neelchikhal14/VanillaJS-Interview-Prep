const buttonSelector = document.querySelector("#weather-api-button");

const makeApiCall = () => {
  console.log("API call made", new Date().getTime());
};

const throttledApiCall = (fn, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    fn(args);
  };
};

buttonSelector.addEventListener("click", throttledApiCall(makeApiCall, 3000));
