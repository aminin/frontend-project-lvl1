import { random } from '../random.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let b = 2; b ** 2 <= number; b += 1) {
    if (number % b === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQA = ({ minNumber = 0, maxNumber = 100 }) => {
  const question = random(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const composeOptions = (options = {}) => ({
  description,
  generateQA,
  ...options,
});

export default composeOptions;
