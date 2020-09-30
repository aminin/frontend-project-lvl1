import Even from './Even.js';

class Gcd extends Even {
  constructor() {
    super();
    this.description = 'Find the greatest common divisor of given numbers.';
  }

  static findGCD(a, b) {
    return !b ? a : Gcd.findGCD(b, a % b);
  }

  generateQuestion() {
    const [a, b] = [this.random(), this.random()];
    return [[a, b].join(' '), `${Gcd.findGCD(a, b)}`];
  }
}

export default Gcd;
