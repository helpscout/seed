// Test :: Packer
var _ = require('lodash');
var assert = require('chai').assert;
var findRoot = require('find-root');
var fs = require('fs');
var packer = require('../index');
var path = require('path');
var root = findRoot(process.cwd());

beforeEach(function(done) {
  // Wipes _seed-pack.scss to blank
  var file = '/test/scss/_seed-packs.scss';
  file = path.join(root, file);
  fs.writeFileSync(file, '');
  done();
});

describe('packer: writes', function() {
  var output = packer();

  it('should automatically add seed packs (from package.json)', function() {
    assert.equal(true, output.includes('seed-breakpoints'));
  });

  it('should automatically prefix seed packs with @import', function() {
    assert.equal(true, output.includes('@import'));
  });
});


describe('packer: custom path', function() {
  it('should locate _seed-pack.scss from custom glob path', function() {
    assert.equal(true, packer('./test/scss/**/*.scss').includes('seed-breakpoints'));
  });

  it('should locate _seed-pack.scss from absolute path', function() {
    assert.equal(true, packer('/test/scss/_seed-packs.scss').includes('seed-breakpoints'));
  });
});
