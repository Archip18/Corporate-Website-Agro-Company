export const debounce = (callback, time = 100) => {
  const debouncedCallback = function (event, params) {
    debouncedCallback.reset();
    debouncedCallback.timer = setTimeout(() => {
      callback(event, params)
    }, time)
  }

  debouncedCallback.timer = null;
  debouncedCallback.reset = () => {
    clearTimeout(debouncedCallback.timer);
  }

  return debouncedCallback;
}
