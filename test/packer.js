// Test :: Packer
var _ = require('lodash');
var assert = require('chai').assert;
var packer = require('../index');

describe('packer: writes', function() {
  var output = packer();

  it('should automatically add seed packs (from package.json)', function() {
    assert.equal(true, output.includes('seed-breakpoints'));
  });

  it('should automatically prefix seed packs with @import', function() {
    assert.equal(true, output.includes('@import'));
  });
});
