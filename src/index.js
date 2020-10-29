import {
  ask, say, trap, meetAndGreet,
} from './cli.js';

const playGame = async (name, options) => {
  const { generateQA, description, roundsLimit = 3 } = options;
  let rightAnswersCount = 0;
  say(description);
  while (rightAnswersCount < roundsLimit) {
    const [question, correctAnswer] = generateQA(options);
    say(`Question: ${question}`);
    const answer = await ask('Your answer:');
    const isCorrect = answer.toLowerCase() === correctAnswer;
    say(isCorrect
      ? 'Correct!'
      : `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    if (!isCorrect) break;
    rightAnswersCount += 1;
  }
  say(rightAnswersCount === roundsLimit
    ? `Congratulations, ${name}!`
    : `Let's try again, ${name}!`);
};

const run = async (options) => {
  try {
    const name = await meetAndGreet();
    playGame(name, options);
  } catch (e) {
    trap(e);
  }
};

export default run;
