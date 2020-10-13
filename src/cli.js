import promptly from 'promptly';

const say = (phrase) => console.log(phrase);
const ask = async (question) => promptly.prompt(question);
const trap = (error) => console.log(error.message);
const meetAndGreet = async () => {
  say('Welcome to the Brain Games!');
  const name = await ask('May I have your name?');
  say(`Hello, ${name}!`);
  return name;
};

export {
  ask, say, trap, meetAndGreet,
};

export default async () => {
  try {
    meetAndGreet();
  } catch (e) {
    trap(e);
  }
};
