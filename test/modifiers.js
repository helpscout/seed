// Test :: Input
var assert = require('assert');
// Helper
var sass = require('./helper/sass');

describe('seed-input: modifiers', function() {
  describe('sizes', function() {
    var output = sass('_input-sizes.scss');

    it('should generate custom sizes when $seed-control-sizes is modified', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.indexOf('.c-input--size-sm') >= 0;
      assert.equal(expects, true);
    });

    it('should omit default "lg" sizes when $seed-control-sizes is modified', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.indexOf('.c-input--lg') < 0;
      assert.equal(expects, true);
    });
  });
});
