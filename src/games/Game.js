import { ask, say } from '../cli.js';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["generateQuestion"] }] */
class Game {
  constructor() {
    this.description = 'Just say "yes".';
    this.maxAnswers = 3;
  }

  generateQuestion() {
    return ['Say yes.', 'yes'];
  }

  static checkAnswer(answer, correctAnswer) {
    return answer.toLowerCase() === correctAnswer;
  }

  static sayIsCorrect(isCorrect, answer, correctAnswer) {
    say(isCorrect ? 'Correct!' : `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  }

  async askQuestion(question, correctAnswer) {
    say(`Question: ${question}`);
    const answer = await ask('Your answer:');
    const isCorrect = this.constructor.checkAnswer(answer, correctAnswer);
    this.constructor.sayIsCorrect(isCorrect, answer, correctAnswer);
    return isCorrect;
  }

  async playGame(name) {
    let rightAnswers = 0;
    say(this.description);
    while (rightAnswers < this.maxAnswers) {
      // eslint-disable-next-line no-await-in-loop
      if (!await this.askQuestion(...this.generateQuestion())) break;
      rightAnswers += 1;
    }
    return this.gameResult(rightAnswers, name);
  }

  gameResult(rightAnswers, name) {
    return rightAnswers >= this.maxAnswers ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  }
}

export default Game;
