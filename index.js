var _ = require('lodash');
var pathfinder = require('./scripts/pathfinder');
var packfinder = require('seed-packfinder');

var harvester = function() {
  // Define the export array
  var includePaths = [];
  var paths = pathfinder(arguments);
  var packs = packfinder.find();

  if (!packs) {
    return false;
  }

  _.forEach(packs, function(pack) {
    includePaths.push(require(pack));
  });

  if (paths.length) {
    includePaths.push(paths);
  }

  // Return flattened array of paths from packs + arguments
  return _.uniq(_.flattenDeep(includePaths));
};

module.exports = harvester;
