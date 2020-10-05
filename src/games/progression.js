import { random, randomKey } from '../random.js';

const randomProgression = ({
  minStart = 0, maxStart = 100, minStep = 1, maxStep = 20, size = 10,
}) => {
  const start = random(minStart, maxStart);
  const step = random(minStep, maxStep);
  return Array(size).fill(0).map((a, i) => start + i * step);
};

const progression = (options = {}) => {
  const description = 'What number is missing in the progression?';
  const generateQA = () => {
    const prog = randomProgression(options);
    const i = randomKey(prog);
    const answer = `${prog[i]}`;
    prog[i] = '..';
    const question = prog.join(' ');
    return [question, answer];
  };
  return {
    description,
    generateQA,
    ...options,
  };
};

export default progression;
