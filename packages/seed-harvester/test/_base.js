// Test :: Seed packs
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

  it('should export a flat array', function() {
    var list = harvester();
    list = list.filter(function(item) {
      return item instanceof Array;
    });
    // the list of paths should not contain an array
    assert.equal(0, list.length);
  });
});
