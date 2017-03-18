// Test :: Input
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: modifiers', function() {
  describe('sizes', function() {
    var output = barista({
      file: '_input-sizes.scss',
    });

    it('should generate custom sizes when $seed-control-sizes is modified', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.css.indexOf('.c-input--size-sm') >= 0;
      assert.equal(expects, true);
    });

    it('should omit default "lg" sizes when $seed-control-sizes is modified', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.css.indexOf('.c-input--lg') < 0;
      assert.equal(expects, true);
    });
  });
});
