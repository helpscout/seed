// Test :: Selector
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: selectors', function() {
  describe('_select.scss', function() {
    var output = barista({
      file: '_select-scoping.scss',
    });

    it('should be properly scoped when @import within a selector', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.css.indexOf('html select.c-input') >= 0;
      assert.equal(expects, true);
    });
  });

  describe('_textarea.scss', function() {
    var output = barista({
      file: '_textarea-scoping.scss',
    });

    it('should be properly scoped when @import within a selector', function() {
      // Class structure should be
      // html textarea.c-input { ... }
      var expects = output.css.indexOf('html textarea.c-input') >= 0;
      assert.equal(expects, true);
    });
  });
});
