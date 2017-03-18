// Helper :: Sass

var findRoot = require('find-root');
var pathfinder = require('sass-pathfinder');
var sass = require('node-sass');
var path = require('path');
var root = findRoot(__dirname);

var testPath = path.join(root, 'scss/pack/seed-input/');

var includePaths = pathfinder([
  require(path.join(root, 'index')),
  testPath,
]);

module.exports = function(file) {
  var testFile = path.join(root, 'test', 'scss', file);
  return sass.renderSync({
    file: testFile,
    includePaths: includePaths,
  }).css.toString();
};
