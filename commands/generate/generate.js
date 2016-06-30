// Commands :: Generate :: Generate
'use strict';

var _ = require('lodash');
var fs = require('fs');
var isEmpty = require('is-empty');
var mkdirp = require('mkdirp');

var cli = global.cli;
var templateDir = global.templateDir + 'module/';

// var prompt = require('./prompt');

// Default options
var data = {
  name: null,
  prefix: null,
  type: null
};

var getPrefix = function(type) {
  if (!type || typeof type !== 'string') {
    return false;
  }

  var prefix = false;

  if (type === 'component' || type === 'c') {
    prefix = 'c';
  }
  if (type === 'object' || type === 'o') {
    prefix = 'o';
  }
  if (type === 'utility' || type === 'u') {
    prefix = 'u';
  }

  return prefix;
};

var parseOptions = function(options) {
  if (!options) {
    process.exit(1)
    return false;
  }

  data = _.extend(data, options);
  data.prefix = getPrefix(data.type);

  // Normalize values
  for (var key in data) {
    data[key] = data[key].replace(/ /g, '').toLowerCase();
  }

  return data;
};

var generate = function(options) {
  if (!options) {
    process.exit(1)
    return false;
  }

  options = parseOptions(options);

  var dest = options.name;

  mkdirp.sync(dest);

  console.log(`Generating your new ${ options.type }…`);

  var templateFiles = fs.readdirSync(templateDir);
  _.forEach(templateFiles, function(file) {
    var template = fs.readFileSync(templateDir + file, 'utf8');
    fs.writeFileSync(dest + '/' + file, _.template(template)(options));
    console.log(`    created  ${ dest + '/' + file }`);
  });

  console.log('');

  console.log(`Congrats! Your new .scss ${ options.type } has been created.`);
  process.exit(0)
};

module.exports = generate;
