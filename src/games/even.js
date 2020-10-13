import { random } from '../random.js';

const isEven = (n) => n % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQA = ({ minNumber = 0, maxNumber = 100 }) => {
  const question = random(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const composeOptions = (options = {}) => ({
  description,
  generateQA,
  ...options,
});

export default composeOptions;
