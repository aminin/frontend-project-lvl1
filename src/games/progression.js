import { random, randomKey } from '../random.js';

const description = 'What number is missing in the progression?';

const progression = (options = {}) => {
  const {
    minStart = 0, maxStart = 100, minStep = 1, maxStep = 20,
    size = 10,
  } = options;
  const randomProgression = () => {
    const start = random(minStart, maxStart);
    const step = random(minStep, maxStep);
    return Array(size).fill(0).map((a, i) => start + i * step);
  };
  const generateQuestion = () => {
    const prog = randomProgression();
    const i = randomKey(prog);
    const answer = prog[i];
    prog[i] = '..';
    return [prog.join(' '), `${answer}`];
  };
  return {
    description,
    generateQuestion,
    ...options,
  };
};

export default progression;
