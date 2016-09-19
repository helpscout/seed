var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-control'),
  require('seed-input'),
  path.join(__dirname, 'scss')
);

module.exports = files;
