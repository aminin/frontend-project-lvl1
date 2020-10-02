import { random } from '../random.js';

const isPrime = (a, b = 2) => {
  if (b ** 2 > a) return true;
  return a % b ? isPrime(a, b + 1) : false;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const generateQuestion = () => {
    const number = random(minNumber, maxNumber);
    return [number, ['no', 'yes'][+isPrime(number)]];
  };
  return {
    description,
    generateQuestion,
    ...options,
  };
};

export default prime;
