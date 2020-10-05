import promptly from 'promptly';

const say = (p) => console.log(p);
const ask = async (q) => promptly.prompt(q);
const trap = (e) => console.log(e.message);

export {
  ask, say, trap,
};

export default async () => {
  try {
    say('Welcome to the Brain Games!');
    const name = await ask('May I have your name?');
    say(`Hello, ${name}!`);
  } catch (e) {
    trap(e);
  }
};
