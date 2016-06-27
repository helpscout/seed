// Commands :: Blank
'use strict';

const isBlank = require('is-blank');
const chalk = require('chalk');

const inputFile = global.cli.input[0];

if (isBlank(inputFile)) {
  console.log(global.cli.help);
  process.exit(1);
}
