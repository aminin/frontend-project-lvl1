#!/usr/bin/env node
import { greet, meet, say } from '../src/cli.js';

say('Welcome to the Brain Games!');

meet().then(greet);
