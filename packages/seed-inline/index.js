var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder([
  require('@seedcss/seed-props'),
  require('@seedcss/seed-publish'),
  path.join(__dirname, 'scss')
]);

module.exports = files;
