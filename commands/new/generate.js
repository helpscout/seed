// Commands :: New :: Generate
'use strict';

var _ = require('lodash');
var fs = require('fs');
var isEmpty = require('is-empty');
var mkdirp = require('mkdirp');

var cli = global.cli;
var templateDir = global.templateDir + 'pack/';

var isFile = function(file) {
  if (!file) {
    return false;
  }
  return fs.statSync(file).isFile();
};

var copyFile = function(dest, options, file, output) {
  if (!file) {
    return false;
  }
  output = output ? output : file;

  var template = fs.readFileSync(templateDir + file, 'utf8');
  fs.writeFileSync(dest + '/' + output, _.template(template)(options));

  return console.log(`    created  ${ dest + '/' + output }`);
};

var copyDirectoryFiles = function(dest, options) {
  var config = fs.readFileSync(templateDir + 'scss/pack/_config.scss', 'utf8');
  var scss = fs.readFileSync(templateDir + 'scss/pack/__index.scss', 'utf8');
  var banner = fs.readFileSync(templateDir + 'scripts/banner.js', 'utf8');
  var build = fs.readFileSync(templateDir + 'scripts/build.js', 'utf8');
  var pathfinder = fs.readFileSync(templateDir + 'scripts/pathfinder.js', 'utf8');
  fs.writeFileSync(dest + `/scss/pack/${options.packName}/_config.scss`, _.template(config)(options));
  fs.writeFileSync(dest + `/scss/pack/${options.packName}/__index.scss`, _.template(scss)(options));
  fs.writeFileSync(dest + `/scripts/banner.js`, _.template(banner)(options));
  fs.writeFileSync(dest + `/scripts/build.js`, _.template(build)(options));
  fs.writeFileSync(dest + `/scripts/pathfinder.js`, _.template(pathfinder)(options));

  console.log(`    created  ${ dest }/scss/pack/${options.packName}/_config.scss`);
  console.log(`    created  ${ dest }/scss/pack/${options.packName}/__index.scss`);
  console.log(`    created  ${ dest }/scripts/banner.js`);
  console.log(`    created  ${ dest }/scripts/pathfinder.js`);
  console.log(`    created  ${ dest }/scripts/build.js`);
};

var generate = function(dest, options) {
  if (!dest) {
    return false;
  }

  // Generate files in directories
  // TODO: Figure out a good recursive method (I've tried several times, but couldn't get a good one working.
  copyDirectoryFiles(dest, options);

  var templateFiles = fs.readdirSync(templateDir);
  _.forEach(templateFiles, function(file) {
    // Generate files
    if (isFile(templateDir + file)) {
      var output = file;
      if (file.indexOf('gitignore') >= 0) {
        output = '.gitignore';
      }
      copyFile(dest, options, file, output);
    }
  });
};

module.exports = generate;
