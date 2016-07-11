var path = require('path');
var seedProps = require('seed-props');

var includePath = function() {
  var paths = Array.prototype.slice.call(arguments);
  return [].concat.apply([], paths);
};

var files = [
  seedProps,
  path.join(__dirname, 'scss')
];

module.exports = includePath(files);
