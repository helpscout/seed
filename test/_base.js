// Test :: Seed packs
var _ = require('lodash');
var assert = require('chai').assert;
var harvester = require('../index');

describe('harvester: basic', function() {
  it('should export an array of paths', function() {
    assert.isArray(harvester());
  });

  it('should contain strings in array of paths', function() {
    var first = harvester()[0];
    assert.isString(first);
  });
});
