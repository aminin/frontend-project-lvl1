import promptly from 'promptly';

const say = (p) => console.log(p);
const ask = async (q) => promptly.prompt(q);
const greet = (name) => say(`Hello, ${name}!`);
const meet = () => ask('May I have your name?');

export {
  ask, greet, meet, say,
};
