import { makeQAGenerator } from './even.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  const isPrm = (a, b = 2) => {
    if (b ** 2 > a) return true;
    return a % b ? isPrm(a, b + 1) : false;
  };
  return isPrm(number);
};

const prime = (options = {}) => ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQA: makeQAGenerator(isPrime, options),
  ...options,
});

export default prime;
