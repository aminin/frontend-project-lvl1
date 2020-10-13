import { random } from '../random.js';

const findGCD = (a, b) => (!b ? a : findGCD(b, a % b));

const description = 'Find the greatest common divisor of given numbers.';

const composeOptions = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const generateQA = () => {
    const a = random(minNumber, maxNumber);
    const b = random(minNumber, maxNumber);
    const question = `${a} ${b}`;
    const answer = findGCD(a, b).toString();
    return [question, answer];
  };
  return {
    description,
    generateQA,
    ...options,
  };
};

export default composeOptions;
