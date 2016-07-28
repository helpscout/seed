// Test :: Find
var _ = require('lodash');
var assert = require('chai').assert;
var packfinder = require('../index');

var packs = packfinder.find();

describe('packfinder: find', function() {
  var pack = packs[0];

  it('should automatically include seed packs (from package.json)', function() {
    assert.equal(true, pack.includes('seed-breakpoints'));
  });

  it('should include not seed pack dependencies', function() {
    assert.equal(false, pack.includes('seed-props'));
  });
});
