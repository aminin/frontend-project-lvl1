import { random } from '../random.js';

const findGCD = (a, b) => (!b ? a : findGCD(b, a % b));

const description = 'Find the greatest common divisor of given numbers.';

const generateQA = ({ minNumber = 0, maxNumber = 100 }) => {
  const a = random(minNumber, maxNumber);
  const b = random(minNumber, maxNumber);
  const question = `${a} ${b}`;
  const answer = findGCD(a, b).toString();
  return [question, answer];
};

const composeOptions = (options = {}) => ({
  description,
  generateQA,
  ...options,
});

export default composeOptions;
