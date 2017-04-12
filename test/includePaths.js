// Test :: includePaths
'use strict';

var assert = require('chai').assert;
var barista = require('../index');
var findRoot = require('find-root');
var path = require('path');
var root = findRoot(__dirname).split('/node_modules')[0];
var some = require('lodash.some');

describe('barista { options: includePaths }', function() {
  it('should extend default includePaths with custom paths', function() {
    var output = barista({
      content: '.pink-hot-is { color: hotpink; }',
      includePaths: ['/styles/hello'],
    });
    var customPaths = some(output.includePaths, function(p) {
      return p === path.join(root, '/styles/hello');
    });
    var seedPaths = some(output.includePaths, function(p) {
      return p.indexOf('seed-props') >= 0;
    });
    var expect = customPaths && seedPaths;

    assert.isOk(expect);
  });

  it('should accept multiple paths in array', function() {
    var output = barista({
      content: '.pink-hot-is { color: hotpink; }',
      includePaths: ['one', 'two', 'three'],
    });
    var expect = some(output.includePaths, function(path) {
      return path.indexOf('two') >= 0;
    });

    assert.isOk(expect);
  });

  it('should accept nested arrays of paths', function() {
    var output = barista({
      content: '.pink-hot-is { color: hotpink; }',
      includePaths: ['one', 'two', ['three', ['four'], 'five']],
    });
    var expect = some(output.includePaths, function(path) {
      return path.indexOf('four') >= 0;
    });

    assert.isOk(expect);
  });
});
