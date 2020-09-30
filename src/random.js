const random = (min, max) => () => min + Math.round(Math.random() * max);
const randomKey = (obj) => {
  const len = Object.keys(obj).length;
  return Object.keys(obj)[Math.floor(Math.random() * len) % len];
};

export { random, randomKey };
