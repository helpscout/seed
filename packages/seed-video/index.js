var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('@seedcss/seed-breakpoints'),
  require('@seedcss/seed-dash'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-thumbnail'),
  path.join(__dirname, 'scss')
);

module.exports = files;
