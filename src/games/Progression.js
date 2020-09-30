import Game from './Game.js';
import { random, randomKey } from '../random.js';

class Progression extends Game {
  constructor() {
    super();
    this.description = 'What number is missing in the progression?';
    this.minStart = 0;
    this.maxStart = 100;
    this.minStep = 1;
    this.maxStep = 20;
    this.size = 10;
    this.ops = {
      '+': (a, b) => (a + b),
      '-': (a, b) => (a - b),
      '*': (a, b) => (a * b),
    };
    this.randomStart = random(this.minStart, this.maxStart);
    this.randomStep = random(this.minStep, this.maxStep);
  }

  randomProgression() {
    const start = this.randomStart();
    const step = this.randomStep();
    return Array(this.size).fill(0).map((a, i) => start + i * step);
  }

  generateQuestion() {
    const prog = this.randomProgression();
    const i = randomKey(prog);
    const answer = prog[i];
    prog[i] = '..';
    return [prog.join(' '), `${answer}`];
  }
}

export default Progression;
