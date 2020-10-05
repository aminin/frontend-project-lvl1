import { random } from '../random.js';

const findGCD = (a, b) => (!b ? a : findGCD(b, a % b));

const gcd = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const description = 'Find the greatest common divisor of given numbers.';
  const generateQA = () => {
    const a = random(minNumber, maxNumber);
    const b = random(minNumber, maxNumber);
    const question = [a, b].join(' ');
    const answer = `${findGCD(a, b)}`;
    return [question, answer];
  };
  return {
    description,
    generateQA,
    ...options,
  };
};

export default gcd;
