import { ask, say } from './cli.js';

const MAX_NUMBER = 1000;
const MAX_ANSWERS = 3;

const askIsEven = async (number) => {
  say(`Question: ${number}`);
  const answer = await ask('Your answer:');
  const correctAnswer = ['yes', 'no'][number % 2];
  const isCorrect = correctAnswer === answer.toLowerCase();
  say(isCorrect ? 'Correct!' : `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return isCorrect;
};

const playTheGame = async (username) => {
  let rightAnswers = 0;
  say('Answer "yes" if the number is even, otherwise answer "no".');
  while (rightAnswers < MAX_ANSWERS) {
    // eslint-disable-next-line no-await-in-loop
    if (!await askIsEven(Math.ceil(Math.random() * MAX_NUMBER))) break;
    rightAnswers += 1;
  }
  return rightAnswers >= 3 ? `Congratulations, ${username}!` : `Let's try again, ${username}!`;
};

export default playTheGame;
