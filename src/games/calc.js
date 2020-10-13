import { random, randomKey } from '../random.js';

const ops = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '*': (a, b) => (a * b),
};

const description = 'What is the result of the expression?';

const generateQA = ({ minNumber = 0, maxNumber = 100 }) => {
  const a = random(minNumber, maxNumber);
  const b = random(minNumber, maxNumber);
  const op = randomKey(ops);
  const question = `${a} ${op} ${b}`;
  const answer = ops[op](a, b).toString();
  return [question, answer];
};

const composeOptions = (options = {}) => ({
  description,
  generateQA,
  ...options,
});

export default composeOptions;
