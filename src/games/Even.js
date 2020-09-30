import Game from './Game.js';
import { random } from '../random.js';

class Even extends Game {
  constructor() {
    super();
    this.description = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.minNumber = 0;
    this.maxNumber = 100;
    this.random = random(this.minNumber, this.maxNumber);
  }

  generateQuestion() {
    const number = this.random();
    return [number, ['yes', 'no'][number % 2]];
  }
}

export default Even;
