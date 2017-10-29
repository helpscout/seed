// Dependencies
var findRoot = require('find-root');
var fs = require('fs');
var path = require('path');
var root = findRoot(process.cwd());

// Methods

var find = function() {
  return getDependencies().filter(function(pkg) {
    return isSeedPack(pkg);
  });
};

var findPaths = function() {
  return find().map(require);
};


var isSeedPack = function(pkg) {
  if (!dirExists(pkg)) {
    return false;
  }
  return getKeywords(pkg).indexOf('seed-pack') !== -1;
};


var getDependencies = function() {
  var pkg = require(path.join(root, 'package.json'));
  var devDeps = pkg.devDependencies || {};
  var deps = pkg.dependencies || {};

  return Object.keys(devDeps).concat(Object.keys(deps));
};

var dirExists = function(pkg) {
  var dir = path.join(root, 'node_modules', pkg);
  if (!fs.existsSync(dir)) {
    console.log(pkg + ' could not be found in node_modules.');
    console.log('Running npm install might help!');
    // Kill seed-packfinder :'(
    return process.exit(1);
  }
  else {
    return true;
  }
};

var getKeywords = function(pkg) {
  var packageJSON = path.join(root, 'node_modules', pkg, 'package.json');
  if (!fs.existsSync(packageJSON)) {
    return [];
  }
  var stat = fs.statSync(packageJSON).isFile();

  if (!stat) {
    console.log(pkg + ' could not be found in node_modules.');
    console.log('Running npm install might help!');
    // Kill seed-packkfinder :'(
    return process.exit(1);
  }

  var keywords = require(packageJSON).keywords;

  if (!keywords || !keywords.length) {
    return [];
  }

  return keywords;
};


module.exports = {
  find: find,
  findPaths: findPaths,
  getDependencies: getDependencies,
  getKeywords: getKeywords,
  isSeedPack: isSeedPack
};
