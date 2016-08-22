// Seed Packer
'use strict';

// Dependencies
var findRoot = require('find-root');
var fs = require('fs');
var glob = require('glob');
var packfinder = require('seed-packfinder');
var path = require('path');
var root = findRoot(process.cwd());


// Methods

var getPathFile = function(file) {
  if (!file) {
    return false;
  }

  if (file.indexOf('_seed-packs.scss') < 0) {
    console.log('A non-glob path must include _seed-pack.scss');
    process.exit(1);
    return false;
  }

  file = path.join(root, file);
  var stat = fs.statSync(file).isFile();

  if (!stat) {
    console.log('seed-packer could not find ' + file + '.');
    console.log('Please double check to make sure the path to _seed-packs.scss is correct.');
    console.log('If you\'re not sure, you can try using seed-packer with an argument.');
    return process.exit(1);
  }
  else {
    return file;
  }
};


var getPackFile = function(filePath) {
  // Default glob path
  filePath = filePath ? filePath : '**/*.scss';

  var file = false;
  var options = {
    ignore: [
      'bower_components/**/*',
      'node_modules/**/*'
    ]
  };

  if (filePath.indexOf('*.scss') >= 0) {
    var scssFiles = glob.sync(filePath, options);

    if (!scssFiles.length) {
      return false;
    }

    for(var i = 0, len = scssFiles.length; i < len; i++) {
      var f = scssFiles[i];
      if (f.indexOf('_seed-packs.scss') >= 0) {
        file = f;
        break;
      }
    }
  }
  else {
    file = getPathFile(filePath);
  }

  return file;
};


var addPacks = function(packs, file) {
  if (!packs || !file) {
    return false;
  }

  var template = '// Seed packs\n';
  template += '// Automagically added by seed-packer <3\n\n';

  for(var i = 0, len = packs.length; i < len; i++) {
    var p = packs[i];
    template += '@import "pack/' + p + '/_index";\n';
  }
  // Write to file
  fs.writeFileSync(file, template);

  return template;
};


var seedPacker = function(filePath) {
  var packs = packfinder.find();
  if (!packs) {
    return false;
  }

  var file = getPackFile(filePath);

  if (!file) {
    return;
  }

  return addPacks(packs, file);
};

module.exports = seedPacker;
