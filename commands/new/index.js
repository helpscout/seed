// Commands :: New :: Index
'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var fs = require('fs');
var isEmpty = require('is-empty');
var mkdirp = require('mkdirp');

var cli = global.cli;
var templateDir = global.templateDir + 'pack/';

var git = require('./git');
var prompt = require('./prompt');
var command = global.cli.input[0];

var generate = require('./generate');

if (((command === 'new' || command === 'n') && isEmpty(global.cli.flags)) || global.cli.flags.new) {

  prompt()
  .then(function(options) {
    console.log('Generating your new Seed pack…\n')

    options.packName = 'seed-' + options.name;

    var dest = 'seed-' + options.name;

    mkdirp.sync(dest);
    mkdirp.sync(dest + '/scripts');
    mkdirp.sync(dest + '/scss/pack');

    generate(dest, options);

    console.log('\nInitializing Git…');
    git(dest);
    console.log('Git has been setup!');

    console.log(`\nCongrats! Your new Seed pack has been created.\n`);
    console.log(chalk.yellow('Don\'t forget to run npm install'));
    console.log(chalk.green('Happy coding <3'));

    process.exit(0)
  });
}
