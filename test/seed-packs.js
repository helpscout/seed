// Test :: Seed packs
var assert = require('chai').assert;
var countBy = require('lodash.countby');
var harvester = require('../index');

describe('harvester: seed-packs', function() {
  var packs = harvester();
  var pack = packs[0];

  it('should automatically include seed packs (from package.json)', function() {
    assert.equal(true, pack.includes('seed-grid'));
  });

  it('should include seed packs dependencies', function() {
    assert.equal(true, pack.includes('seed-props'));
  });

  it('should not include duplicate seed packs or dependencies', function() {
    var packList = packs.map(function(pack) {
      pack = pack.split('/');
      return pack[pack.length - 2];
    });
    var count = countBy(packList);
    assert.equal(1, count['seed-props']);
  });
});
