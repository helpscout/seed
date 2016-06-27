// Seed CLI
'use strict';

const requireDir = require('require-dir', { log: false });
global.cli = require('./cli.js');

// Require all commands
requireDir('./commands', { recurse: true });
