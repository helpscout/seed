// Test :: Index
'use strict';

if (!global.cli.flags.test) {
  return false;
}

require('shelljs/global');

// Defaults
var directory = 'scss/';
var config = global.path + '/.scss-lint.yml';

if (global.cli.flags.test && global.cli.flags.test !== true) {
  directory = global.cli.flags.test;
}

if (global.cli.flags.config && global.cli.flags.config !== true) {
  config = global.cli.flags.config;
}

var parse = function(data) {
  return data.toString().replace(/\n\s*\n/g,'');
};

var commandOptions = {
  env: process.env,
  cwd: process.cwd(),
  maxBuffer: 300 * 1024
};

var lint = function() {
  console.log('Testing your .scss files…');
  return new Promise(function(resolve, reject) {
    var _command = 'scss-lint ' + directory + ' -c ' + config;
    exec(_command, commandOptions, function(error, report) {
      if (report) {
        return reject(report);
      }
      // Check for important error codes
      if(error && error.code !== 1 && error.code !== 2 && error.code !== 65) {
        return reject(report);
      }
      return resolve(report);
    });
  });
};

lint()
  .then(function(report) {
    console.log('Passed! Your .scss looks spectacular');
  })
  .catch(function(report) {
    console.log('Failed! There were errors in your .scss');
    console.log(parse(report));
    process.exit(1);
  });
