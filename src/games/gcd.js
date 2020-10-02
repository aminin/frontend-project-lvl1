import { random } from '../random.js';

const findGCD = (a, b) => (!b ? a : findGCD(b, a % b));

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const generateQuestion = () => {
    const [a, b] = [random(minNumber, maxNumber), random(minNumber, maxNumber)];
    return [[a, b].join(' '), `${findGCD(a, b)}`];
  };
  return {
    description,
    generateQuestion,
    ...options,
  };
};

export default gcd;
