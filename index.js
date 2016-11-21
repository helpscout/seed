'use strict';

var findRoot = require('find-root');
var flattenDeep = require('lodash.flattendeep');
var pathfinder = require('sass-pathfinder');
var packfinder = require('seed-packfinder');
var uniqBy = require('lodash.uniqby');

var root = findRoot(__dirname);

var getPackName = function(path) {
  if (!path || typeof(path) != 'string') {
    return false;
  }
  var split = path.split('/');
  return split[split.length - 2];
};

var getPackPath = function(pack) {
  var pkgRoot = root.split('/node_modules')[0];
  if (!pack || typeof(pack) != 'string') {
    return false;
  }
  return pkgRoot + '/node_modules/' + pack + '/scss' ;
};

var resolveImportDeps = function(packs) {
  var packs = packs.map(function(pack) {
    var packName = getPackName(pack);
    var packPath = getPackPath(packName);
    if (packs.indexOf(packPath) >= 0) {
      return packPath;
    }
    else {
      return pack;
    }
  });
  return packs;
};

var resolvePacks = function(packs) {
  var packList;
  packs ? packs : [];

  if (packs.length) {
    // Flatten the array to make it mapable
    packs = flattenDeep(packs);
    // Adjust pack list to respect project's deps
    packs = resolveImportDeps(packs);

    packList = packs.map(function(pack) {
      // Get the second last string within the path
      var packName = pack.split('/');
      packName = packName[packName.length - 2];
      // Return an object to make it possible to remove duplicates
      return {
        packName: packName,
        path: pack
      }
    });

    // De-dup the pack list
    packList = uniqBy(packList, 'packName');

    // Transform the list back into an array of paths
    packs = packList.map(function(pack) {
      return pack.path;
    });
  }

  return packs;
};

var requirePack = function(pack) {
  if (!pack || typeof pack !== 'string') {
    return;
  }
  pack = require(pack);
  if (typeof pack === 'string' || (pack instanceof Array === true)) {
    return pack;
  }
  else {
    return '';
  }
};

var harvester = function() {
  // Define the export array
  var includePaths = [];
  var paths = pathfinder(arguments);
  var packs = packfinder.find();

  if (packs.length) {
    packs.forEach(function(pack) {
      includePaths.push(requirePack(pack));
    });
  }

  // Remove duplicate packs
  includePaths = resolvePacks(includePaths);

  // Add paths (arguments) to includePaths
  if (paths.length) {
    includePaths.push(paths);
  }

  // Return flattened array of paths from packs + arguments
  return pathfinder(includePaths);
};

module.exports = harvester;
