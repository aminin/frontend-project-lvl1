import { random } from '../random.js';

const isEven = (n) => n % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (options = {}) => {
  const { minNumber = 0, maxNumber = 100 } = options;
  const generateQuestion = () => {
    const number = random(minNumber, maxNumber);
    return [number, ['no', 'yes'][+isEven(number)]];
  };
  return {
    description,
    generateQuestion,
    ...options,
  };
};

export default even;
