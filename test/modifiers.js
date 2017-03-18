// Test :: Input
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: modifiers', function() {
  describe('sizes', function() {
    var styles = `
      $seed-control-sizes: (
        size-sm: (
          font-size: 0.875rem,
          height: 28px,
          padding: 0 0.5em,
        ),
        size-md: (
          font-size: 1rem,
          height: 32px,
          padding: 0 1em,
        ),
      ) !default;

      @import "components/_index";
    `;

    var output = barista({
      content: styles,
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
