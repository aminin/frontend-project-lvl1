import { withPredicate } from './even.js';

const isPrime = (a, b = 2) => {
  if (b ** 2 > a) return true;
  return a % b ? isPrime(a, b + 1) : false;
};

const prime = (options = {}) => ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestion: withPredicate(isPrime, options),
  ...options,
});

export default prime;
