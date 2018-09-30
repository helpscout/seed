var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('@seedcss/seed-border'),
  require('@seedcss/seed-control'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-states'),
  path.join(__dirname, 'scss')
);

module.exports = files;
