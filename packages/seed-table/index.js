var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('seed-dash'),
  require('seed-publish'),
  require('seed-states'),
  require('seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
