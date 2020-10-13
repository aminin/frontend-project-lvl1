import makeQAGenerator from '../makeQAGenerator.js';

const isEven = (n) => n % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const composeOptions = (options = {}) => ({
  description,
  generateQA: makeQAGenerator(isEven, options),
  ...options,
});

export default composeOptions;
