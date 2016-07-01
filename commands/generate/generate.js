// Commands :: Generate :: Generate
'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var fs = require('fs');
var isEmpty = require('is-empty');
var mkdirp = require('mkdirp');

var cli = global.cli;
var config = require('./config');
var templateDir = global.templateDir + 'module/';

var prompt = require('./prompt');

var generate = function(options) {
  if (!options) {
    process.exit(1)
    return false;
  }

  options = new config(options).options;

  var dest = options.name;

  mkdirp.sync(dest);

  console.log(`Generating your new ${ options.type }…\n`);

  var templateFiles = fs.readdirSync(templateDir);
  _.forEach(templateFiles, function(file) {
    var template = fs.readFileSync(templateDir + file, 'utf8');
    fs.writeFileSync(dest + '/' + file, _.template(template)(options));
    console.log(`    created  ${ dest + '/' + file }`);
  });

  console.log(`\nCongrats! Your new .scss ${ options.type } has been created.`);
  process.exit(0)
};

module.exports = generate;
