import { ask, say, trap } from './cli.js';

const playGame = async (name, { generateQA, description, maxAnswers = 3 }) => {
  let rightAnswers = 0;
  say(description);
  while (rightAnswers < maxAnswers) {
    const [question, correctAnswer] = generateQA();
    say(`Question: ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const answer = await ask('Your answer:');
    const isCorrect = answer.toLowerCase() === correctAnswer;
    say(isCorrect
      ? 'Correct!'
      : `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    if (!isCorrect) break;
    rightAnswers += 1;
  }
  return rightAnswers >= maxAnswers ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
};

const run = async (options) => {
  try {
    say('Welcome to the Brain Games!');
    const name = await ask('May I have your name?');
    say(`Hello, ${name}!`);
    const result = await playGame(name, options);
    say(result);
  } catch (e) {
    trap(e);
  }
};

export default run;
