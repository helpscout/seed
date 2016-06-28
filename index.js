// Seed CLI
'use strict';

global.cli = require('./cli.js');
global.templateDir = __dirname + '/templates/';
global.input = global.cli.input[0];

var isBlank = require('is-blank');
var requireDir = require('require-dir', { log: false });


if (isBlank(global.input)) {
  console.log(global.cli.help);
  process.exit(1);
}
else {
  // Require all commands
  requireDir('./commands', { recurse: true });
}
