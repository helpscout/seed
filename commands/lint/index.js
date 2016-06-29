// Commands :: Lint
'use strict';

if (!global.cli.flags.lint) {
  return false;
}

var chalk = require('chalk');
var sassLint = require('sass-lint');

// Defaults
var directory = '**/*.scss';
var config = global.path + '/.sass-lint.yml';
var options = { files: {} };

if (global.cli.flags.lint && global.cli.flags.lint !== true) {
  directory = global.cli.flags.lint;
}

if (global.cli.flags.config && global.cli.flags.config !== true) {
  config = global.cli.flags.config;
}

if (global.cli.flags.ignore && global.cli.flags.ignore !== true) {
  var ignores = global.cli.flags.ignore;
  ignores = ignores.replace(/ /g, '').split(',');

  options.files.ignore = ignores;
}

var results = sassLint.lintFiles(directory, options, config);

if(sassLint.resultCount(results) > 0) {
  console.log(chalk.red('Failed: We found some issues with your .scss files'));
  sassLint.outputResults(results, options, config);
  process.exit(1);
}
else {
  console.log(chalk.green('Passed: Your .scss files look spectacular!'));
  process.exit(0);
}
