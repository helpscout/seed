// Test :: Find Paths

var assert = require('chai').assert;
var packfinder = require('../index');

var packs = packfinder.findPaths();

describe('packfinder: findPaths', function() {
  it('should automatically include seed packs (from package.json)', function() {
    assert.ok(packs.some(function(pack) {
      return /seed-breakpoints/.test(pack);
    }));
  });

  it('should include seed pack dependencies', function() {
    assert.ok(packs.some(function(pack) {
      return /seed-props/.test(pack);
    }));
  });
});

