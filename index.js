// Seed Packer
'use strict';

// Dependencies
var _ = require('lodash');
var findRoot = require('find-root');
var fs = require('fs');
var glob = require('glob');
var packfinder = require('seed-packfinder');
var path = require('path');
var root = findRoot(process.cwd());


// Methods
var getPackFile = function(path) {
  path = path ? path : '**/*.scss';

  var file = false;
  var options = {
    ignore: [
      'bower_components/**/*',
      'node_modules/**/*'
    ]
  };

  var scssFiles = glob.sync(path, options);

  if (!scssFiles.length) {
    return false;
  }

  for(var i = 0, len = scssFiles.length; i < len; i++) {
    var f = scssFiles[i];
    if (f.includes('_seed-packs.scss')) {
      file = f;
      break;
    }
  }

  return file;
};


var addPacks = function(packs, file) {
  if (!packs || !file) {
    return false;
  }

  var template = '// Seed packs\n';
  template += '// Automagically added by seed-packer <3 \n\n';

  for(var i = 0, len = packs.length; i < len; i++) {
    var p = packs[i];
    template += `@import "pack/${p}/_index";\n`;
  }
  // Write to file
  fs.writeFileSync(file, template);

  return template;
};


var seedPacker = function(path) {
  var packs = packfinder.find();
  if (!packs) {
    return false;
  }

  var file = getPackFile(path);

  if (!file) {
    return;
  }

  return addPacks(packs, file);
};

seedPacker();

module.exports = seedPacker;
