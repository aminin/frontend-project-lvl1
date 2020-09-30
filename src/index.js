import {
  greet, meet, say, trap,
} from './cli.js';

const run = (game) => {
  say('Welcome to the Brain Games!');

  meet().then((name) => {
    greet(name);
    return game.playGame(name);
  }).then(say).catch(trap);
};

export default run;
