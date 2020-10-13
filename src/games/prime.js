import makeQAGenerator from '../makeQAGenerator.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let b = 2; b ** 2 < number; b += 1) {
    if (number % b === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const composeOptions = (options = {}) => ({
  description,
  generateQA: makeQAGenerator(isPrime, options),
  ...options,
});

export default composeOptions;
