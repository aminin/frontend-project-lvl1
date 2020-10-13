import { random } from './random.js';

const makeQAGenerator = (predicate, { minNumber = 0, maxNumber = 100 }) => (
  () => {
    const question = random(minNumber, maxNumber);
    const answer = predicate(question) ? 'yes' : 'no';
    return [question, answer];
  }
);

export default makeQAGenerator;
