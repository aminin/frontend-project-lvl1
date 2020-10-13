import { random, randomKey } from '../random.js';

const randomProgression = ({
  minStart = 0, maxStart = 100, minStep = 1, maxStep = 20, size = 10,
}) => {
  const start = random(minStart, maxStart);
  const step = random(minStep, maxStep);
  return [...Array(size).keys()].map((i) => start + i * step);
};

const description = 'What number is missing in the progression?';

const composeOptions = (options = {}) => {
  const generateQA = () => {
    const progression = randomProgression(options);
    const i = randomKey(progression);
    const answer = progression[i].toString();
    progression[i] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };
  return {
    description,
    generateQA,
    ...options,
  };
};

export default composeOptions;
