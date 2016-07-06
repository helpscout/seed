// Commands :: Generate :: Generate
'use strict';

var _ = require('lodash');
var config = require('./config');
var cli = global.cli;
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var prompt = require('./prompt');

var parseOptions = function(options) {
  if (!options) {
    return false;
  }
  options = new config(options).options;

  if (options.type === 'test') {
    return parseTest(options);
  }
  else {
    return parseModule(options);
  }
};

var parseModule = function(options) {
  if (!options) {
    return false;
  }
  var currentDir = path.basename(process.cwd()).toLowerCase();

  options.dest = options.name;
  options.templateDir = global.templateDir + 'module/';

  if (options.type !== 'scope' && currentDir.indexOf(options.type) < 0) {
    var type = options.type;
    if (type === 'utility') {
      type = 'utilities';
    }
    if (type === 'test') {
      type = 'test';
    }
    else {
      type = `${ type }s`;
    }
    options.dest = `${ type }/${ options.dest }`;
  }

  options.templateFiles = fs.readdirSync(options.templateDir);

  return options;
};

var parseTest = function(options) {
  if (!options) {
    return false;
  }

  options.name = options.name.replace('seed-', '');
  options.dest = 'test';
  options.templateDir = global.templateDir + 'test/';
  options.templateFiles = [ 'test.scss' ];

  return options;
};


var generate = function(options) {
  if (!options) {
    process.exit(1)
    return false;
  }

  options = parseOptions(options);

  mkdirp.sync(options.dest);

  console.log(`Generating your new ${ options.type }…\n`);

  _.forEach(options.templateFiles, function(file) {
    var template = fs.readFileSync(options.templateDir + file, 'utf8');
    var outputFile = file;

    if (options.type === 'test') {
      outputFile = '_' + options.name + '.scss';
    }

    fs.writeFileSync(options.dest + '/' + outputFile, _.template(template)(options));
    console.log(`    created  ${ options.dest + '/' + outputFile }`);
  });

  console.log(`\nCongrats! Your new .scss ${ options.type } has been created.`);
  process.exit(0)
};

module.exports = generate;
