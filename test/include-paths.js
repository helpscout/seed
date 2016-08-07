// Test :: Include paths

var assert = require('chai').assert;
var harvester = require('../index');

describe('harvester: include paths', function() {
  var paths = harvester('path');

  it('should include a path passed in arguments (string)', function() {
    assert.equal('path', paths[paths.length - 1]);
  });

  it('should include multiple paths passed in arguments (string)', function() {
    var paths = harvester('a', 'b', 'c');
    // 6 because 3 from seed-grid, and 3 defined above
    assert.equal(6, paths.length);
  });

  it('should include multiple paths passed in arguments (array)', function() {
    var paths = harvester(['a', 'b', 'c']);
    assert.equal(6, paths.length);
  });

  it('should include multiple paths passed in arguments (deep array)', function() {
    var paths = harvester(['a', 'b', [[['c']]]]);
    assert.equal(6, paths.length);
  });

  it('should consolidate string and array path arguments', function() {
    var paths = harvester('a', ['b', 'c']);
    assert.equal(6, paths.length);
  });

  it('should filter out duplicate paths', function() {
    var paths = harvester('a', ['b', 'c'], 'b', [['c']]);
    assert.equal(6, paths.length);
  });
  // it('should include seed packs dependencies', function() {
  //   assert.equal(true, pack.includes('seed-props'));
  // });
});
