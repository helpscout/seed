var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('@seedcss/seed-badge'),
  require('@seedcss/seed-button'),
  require('@seedcss/seed-dash'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-states'),
  path.join(__dirname, 'scss')
);

module.exports = files;
