import Game from './Game.js';
import { random, randomKey } from '../random.js';

class Calc extends Game {
  constructor() {
    super();
    this.description = 'What is the result of the expression?';
    this.minNumber = 0;
    this.maxNumber = 100;
    this.ops = {
      '+': (a, b) => (a + b),
      '-': (a, b) => (a - b),
      '*': (a, b) => (a * b),
    };
    this.random = random(this.minNumber, this.maxNumber);
  }

  generateQuestion() {
    const [a, b] = [this.random(), this.random()];
    const op = randomKey(this.ops);
    return [[a, op, b].join(' '), `${this.ops[op](a, b)}`];
  }
}

export default Calc;
