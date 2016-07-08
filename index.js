var path = require('path');
var seedBreakpoints = require('seed-breakpoints');

var includePath = function() {
  var paths = Array.prototype.slice.call(arguments);
  return [].concat.apply([], paths);
};

var files = [
  seedBreakpoints,
  path.join(__dirname, 'scss')
];

module.exports = includePath(files);
