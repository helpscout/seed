// Seed CLI
'use strict';

global.cli = require('./cli.js');
global.input = global.cli.input[0];
global.path = __dirname;
global.templateDir = global.path + '/templates/';

var isBlank = require('is-blank');
var requireDir = require('require-dir', { log: false });

if (isBlank(global.cli.input) && isBlank(global.cli.flags)) {
  console.log(global.cli.help);
  process.exit(1);
}
else {
  // Require all commands
  requireDir('./commands', { recurse: true });
}
