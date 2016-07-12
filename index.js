var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = [
  require('seed-breakpoints'),
  path.join(__dirname, 'scss')
];

module.exports = pathfinder(files);
