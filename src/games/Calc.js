import Even from './Even.js';
import { randomKey } from '../random.js';

class Calc extends Even {
  constructor() {
    super();
    this.description = 'What is the result of the expression?';
    this.ops = {
      '+': (a, b) => (a + b),
      '-': (a, b) => (a - b),
      '*': (a, b) => (a * b),
    };
  }

  generateQuestion() {
    const [a, b] = [this.random(), this.random()];
    const op = randomKey(this.ops);
    return [[a, op, b].join(' '), `${this.ops[op](a, b)}`];
  }
}

export default Calc;
