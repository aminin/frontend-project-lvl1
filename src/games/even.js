import { random } from '../random.js';

const isEven = (n) => n % 2 === 0;

export const withPredicate = (predicate, { minNumber = 0, maxNumber = 100 }) => () => {
  const number = random(minNumber, maxNumber);
  return [number, ['no', 'yes'][+predicate(number)]];
};

const even = (options = {}) => ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion: withPredicate(isEven, options),
  ...options,
});

export default even;
