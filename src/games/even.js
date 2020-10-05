import { random } from '../random.js';

const isEven = (n) => n % 2 === 0;

export const makeQAGenerator = (predicate, { minNumber = 0, maxNumber = 100 }) => (
  () => {
    const question = random(minNumber, maxNumber);
    const answer = ['no', 'yes'][+predicate(question)];
    return [question, answer];
  }
);

const even = (options = {}) => ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQA: makeQAGenerator(isEven, options),
  ...options,
});

export default even;
