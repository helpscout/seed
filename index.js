var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var pathfinder = require('./scripts/pathfinder');
var findRoot = require('find-root');
var root = findRoot(process.cwd());

// Define the export array
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

var getDependencies = function() {
  var pkg = require(path.join(root, 'package.json'));
  var devDeps = pkg.devDependencies;
  var deps = pkg.dependencies;
  var dependencies = [];

  if (devDeps) {
    _.forEach(_.keys(devDeps), function(pkg) {
      dependencies.push(pkg);
    });
  }

  if (deps) {
    _.forEach(_.keys(deps), function(pkg) {
      dependencies.push(pkg);
    });
  }

  if (dependencies.length) {
    return dependencies;
  }
  else {
    return false;
  }
};


var harvester = function() {
  // Define the export array
  var includePaths = [];
  var paths = pathfinder(arguments);
  var dependencies = getDependencies();

  if (!dependencies) {
    return false;
  }

  _.forEach(dependencies, function(pkg) {
    if (isSeedPack(pkg)) {
      // Push to includePaths if is seed-pack
      includePaths.push(require(pkg));
    }
  });

  if (paths.length) {
    includePaths.push(paths);
  }

  // Return flattened array of paths from packs + arguments
  return _.uniq(_.flattenDeep(includePaths));
};

module.exports = harvester;
