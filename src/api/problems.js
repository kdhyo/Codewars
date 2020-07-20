import SAMPLE from "../data//problems.json";

export const getProblemList = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(SAMPLE);
    }, 1000);
  });
};
