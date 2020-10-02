import {
  ask, greet, meet, say, trap,
} from './cli.js';

const checkAnswer = (answer, correctAnswer) => answer.toLowerCase() === correctAnswer;

const sayIsCorrect = (isCorrect, answer, correctAnswer) => (say(isCorrect
  ? 'Correct!'
  : `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`));

const askQuestion = async (question, correctAnswer) => {
  say(`Question: ${question}`);
  const answer = await ask('Your answer:');
  const isCorrect = checkAnswer(answer, correctAnswer);
  sayIsCorrect(isCorrect, answer, correctAnswer);
  return isCorrect;
};

const gameResult = (name, rightAnswers, maxAnswers) => (rightAnswers >= maxAnswers
  ? `Congratulations, ${name}!`
  : `Let's try again, ${name}!`);

const playGame = async (name, { generateQuestion, description, maxAnswers = 3 }) => {
  let rightAnswers = 0;
  say(description);
  while (rightAnswers < maxAnswers) {
    // eslint-disable-next-line no-await-in-loop
    if (!await askQuestion(...generateQuestion())) break;
    rightAnswers += 1;
  }
  return gameResult(name, rightAnswers, maxAnswers);
};

const run = (options) => {
  say('Welcome to the Brain Games!');

  meet().then((name) => {
    greet(name);
    return playGame(name, options);
  }).then(say).catch(trap);
};

export default run;
