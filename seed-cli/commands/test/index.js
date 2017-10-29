// Commands :: Test
'use strict';

if (!global.cli.flags.test) {
  return false;
}

var _ = require('lodash');
var del = require('del');
var findRoot = require('find-root');
var fs = require('fs');
var glob = require('glob');
var mkdirp = require('mkdirp');
var path = require('path');
var uuid = require('uuid');

var Mocha = require('mocha');
var mocha = new Mocha();
var root = findRoot(process.cwd());
var templateFile = global.templateDir + 'test/index.js';
var template = fs.readFileSync(templateFile, 'utf8');
var testCache = root + '/.seed-test-cache';
var testDir = 'test';

var options = {
  ignore: [
    'bower_components/**/*',
    'node_modules/**/*'
  ]
};

var clean = function() {
  return del(testCache, { force: true });
};

var getTestFileName = function(file) {
  return path.basename(file).replace(/_/g, '').replace('.scss', '') + '-' + uuid.v1() + '.js';
};

// Delete the test cache directory (just in case it was left over)
clean();

glob('**/*.scss', options, function(err, matches) {
  var files = matches;
  var currentDir = process.cwd().split('/').pop();

  if (currentDir !== testDir) {
    files = files.filter(function(file) {
      var dir = testDir + '/';
      return file.indexOf(dir) >= 0;
    });
  }
  // Create the test cache directory
  mkdirp.sync(testCache);

  if (!files.length) {
    console.log(`\nCouldn't find any tests in your project!`);
    console.log(`You can create a new test by executing "seed g"\n`);
    process.exit(0)
  }

  _.forEach(files, function(file) {
    var dest = testCache + '/' + getTestFileName(file);
    var options = {
      file: file
    };
    // Add mocha compatible .js file to test cache
    fs.writeFileSync(dest, _.template(template)(options));
    // Add path of test cache file to Mocha
    mocha.addFile(dest);
  });

  mocha.run(function(failures){
    // Delete test cache redirectory
    clean();
    process.on('exit', function() {
      process.exit(failures);
    });
  });
});
