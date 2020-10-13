const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const randomKey = (obj) => Object.keys(obj)[random(0, Object.keys(obj).length - 1)];

export { random, randomKey };
