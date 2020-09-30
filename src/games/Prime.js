import Even from './Even.js';

const isPrime = (a, b = 2) => {
  if (b ** 2 > a) return true;
  return a % b ? isPrime(a, b + 1) : false;
};

class Prime extends Even {
  constructor() {
    super();
    this.description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }

  generateQuestion() {
    const number = this.random();
    return [number, ['no', 'yes'][+isPrime(number)]];
  }
}

export default Prime;
