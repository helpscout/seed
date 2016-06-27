// Seed CLI
'use strict';

global.cli = require('./cli.js');
var requireDir = require('require-dir', { log: false });
var isBlank = require('is-blank');
var inputFile = global.cli.input[0];

// Require all commands
requireDir('./commands', { recurse: true });

if (isBlank(inputFile)) {
  console.log(global.cli.help);
  process.exit(1);
}
