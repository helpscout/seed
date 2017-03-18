// Test :: Selector
var assert = require('assert');
// Helper
var sass = require('./helper/sass');

describe('seed-input: selectors', function() {
  describe('_select.scss', function() {
    var output = sass('_select-scoping.scss');

    it('should be properly scoped when @import within a selector', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.indexOf('html select.c-input') >= 0;
      assert.equal(expects, true);
    });
  });

  describe('_textarea.scss', function() {
    var output = sass('_textarea-scoping.scss');

    it('should be properly scoped when @import within a selector', function() {
      // Class structure should be
      // html textarea.c-input { ... }
      var expects = output.indexOf('html textarea.c-input') >= 0;
      assert.equal(expects, true);
    });
  });
});
