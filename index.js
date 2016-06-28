// Seed CLI
'use strict';

global.cli = require('./cli.js');
global.templateDir = __dirname + '/templates/';
global.input = global.cli.input[0];

var requireDir = require('require-dir', { log: false });

// Require all commands
requireDir('./commands', { recurse: true });

// if (isBlank(global.input)) {
  // console.log(global.cli.help);
  // process.exit(1);
// }
