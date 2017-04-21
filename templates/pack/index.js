var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder([
  path.join(__dirname, 'scss')
]);

module.exports = files;
