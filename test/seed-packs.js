// Test :: Seed packs
var _ = require('lodash');
var assert = require('chai').assert;
var harvester = require('../index');

describe('harvester: seed-packs', function() {
  var pack = harvester()[0];

  it('should automatically include seed packs (from package.json)', function() {
    assert.equal(true, pack.includes('seed-grid'));
  });

  it('should include seed packs dependencies', function() {
    assert.equal(true, pack.includes('seed-props'));
  });
});
