import { random, randomKey } from '../random.js';

const ops = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '*': (a, b) => (a * b),
};

const calc = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const description = 'What is the result of the expression?';
  const generateQA = () => {
    const a = random(minNumber, maxNumber);
    const b = random(minNumber, maxNumber);
    const op = randomKey(ops);
    const question = `${a} ${op} ${b}`;
    const answer = `${ops[op](a, b)}`;
    return [question, answer];
  };
  return {
    description,
    generateQA,
    ...options,
  };
};

export default calc;
