import promptly from 'promptly';

const say = (p) => console.log(p);
const ask = async (q) => promptly.prompt(q);
const greet = (name) => say(`Hello, ${name}!`);
const meet = () => ask('May I have your name?');
const trap = (e) => console.log(e.message);

export {
  ask, greet, meet, say, trap,
};

export default async () => {
  try {
    say('Welcome to the Brain Games!');
    const name = await meet();
    greet(name);
  } catch (e) {
    trap(e);
  }
};
