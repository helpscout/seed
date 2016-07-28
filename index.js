var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var findRoot = require('find-root');
var root = findRoot(process.cwd());

var pkg = require(path.join(root, 'package.json'));
var devDeps = pkg.devDependencies;
var deps = pkg.dependencies;

// Define the export array
var includePaths = [];

var getKeywords = function(pkg) {
  var _path = path.join(root, 'node_modules', pkg, 'package.json');
  var stat = fs.statSync(_path).isFile();

  if (!stat) {
    console.log(pkg + ' could not be found in node_modules.');
    console.log('Running npm install might help!');
    return process.exit(1);
  }
  else {
    var module = require(_path);
    var keywords = module.keywords;
    if (keywords) {
      return keywords;
    }
    else {
      return false;
    }
  }
};


var isSeedPack = function(pkg) {
  var keywords = getKeywords(pkg);
  if (keywords) {
    return _.includes(keywords, 'seed-pack');
  }
  else {
    return false;
  }
};


var addToIncludePaths = function(dir) {
  if (!dir) {
    return false;
  }
  _.forEach(_.keys(dir), function(pkg) {
    if (isSeedPack(pkg)) {
      // Push to includePaths if is seed-pack
      includePaths.push(require(pkg));
    }
  });
};


var harvester = function() {
  if (devDeps) {
    addToIncludePaths(devDeps);
  }
  if (deps) {
    addToIncludePaths(deps);
  }
  return _.uniq(_.flattenDeep(includePaths));
};

module.exports = harvester;
