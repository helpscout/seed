'use strict';

var flattenDeep = require('lodash.flattendeep');
var pathfinder = require('sass-pathfinder');
var packfinder = require('seed-packfinder');
var uniqBy = require('lodash.uniqBy');

var resolvePacks = function(packs) {
  var packList;
  packs ? packs : [];

  if (packs.length) {
    // Flatten the array to make it mapable
    packs = flattenDeep(packs);

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

var harvester = function() {
  // Define the export array
  var includePaths = [];
  var paths = pathfinder(arguments);
  var packs = packfinder.find();

  if (packs.length) {
    packs.forEach(function(pack) {
      includePaths.push(require(pack));
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
