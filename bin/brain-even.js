#!/usr/bin/env node
import { greet, meet, say } from '../src/cli.js';
import playTheGame from '../src/even.js';

say('Welcome to the Brain Games!');

meet().then((name) => {
  greet(name);
  return playTheGame(name);
}).then(say);
