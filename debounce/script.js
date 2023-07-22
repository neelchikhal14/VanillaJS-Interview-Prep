const buttonSelector = document.querySelector("#weather-api-button");

const makeApiCall = () => {
  console.log("API call made");
};

const debouncedApiCall = (fn, delay) => {
  let timer;
  return function (...args) {
    // if timer exists clear timer
    if (timer) clearTimeout(timer);
    // reset the timer -> assign a new one
    timer = setTimeout(() => {
      fn(args);
    }, delay);
  };
};

buttonSelector.addEventListener("click", debouncedApiCall(makeApiCall, 3000));
