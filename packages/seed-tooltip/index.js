var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('seed-bootstrap-fade'),
  require('seed-publish'),
  require('seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
