import {
  ask, say, trap, meetAndGreet,
} from './cli.js';

const playGame = async (name, { generateQA, description, roundsLimit = 3 }) => {
  let rightAnswersCount = 0;
  const sayResult = () => say(rightAnswersCount === roundsLimit
    ? `Congratulations, ${name}!`
    : `Let's try again, ${name}!`);
  say(description);
  const makeStep = async () => {
    const [question, correctAnswer] = generateQA();
    say(`Question: ${question}`);
    const answer = await ask('Your answer:');
    const isCorrect = answer.toLowerCase() === correctAnswer;
    say(isCorrect
      ? 'Correct!'
      : `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    rightAnswersCount += isCorrect;
    if (isCorrect && rightAnswersCount < roundsLimit) {
      makeStep();
    } else {
      sayResult();
    }
  };
  makeStep();
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
