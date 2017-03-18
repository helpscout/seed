// Test :: Selector
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: config', function() {
  describe('namespace', function() {
    var styles = `
      $seed-input-namespace: 'my-input';
      @import "components/input/_index";
    `;
    var output = barista({
      content: styles
    });

    it('should update className of component when modified', function() {
      var selector = output.data.stylesheet.rules[0].selectors;
      var expects = selector[0] === '.my-input';
      assert.equal(expects, true);
    });
  });
});
