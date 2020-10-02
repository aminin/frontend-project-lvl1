import { random, randomKey } from '../random.js';

const ops = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '*': (a, b) => (a * b),
};

const description = 'What is the result of the expression?';

const calc = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const generateQuestion = () => {
    const [a, b] = [random(minNumber, maxNumber), random(minNumber, maxNumber)];
    const op = randomKey(ops);
    return [[a, op, b].join(' '), `${ops[op](a, b)}`];
  };
  return {
    description,
    generateQuestion,
    ...options,
  };
};

export default calc;
