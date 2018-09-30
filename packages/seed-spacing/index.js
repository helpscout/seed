var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = [
  require('@seedcss/seed-breakpoints'),
  require('@seedcss/seed-publish'),
  path.join(__dirname, 'scss')
];

module.exports = pathfinder(files);
