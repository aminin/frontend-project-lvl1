const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const randomKey = (obj) => {
  const len = Object.keys(obj).length;
  return Object.keys(obj)[Math.floor(Math.random() * len) % len];
};

export { random, randomKey };
