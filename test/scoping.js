// Test :: Scoping
/* globals describe: true, it: true */
'use strict';
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: scoping', function() {
  describe('.c-input', function() {
    var styles = `
      html {
        @import "components/input/_index";
      }
    `;
    var output = barista({
      content: styles
    });

    it('should be properly scoped when @import within a selector', function() {
      // html .c-input { ... }
      var expects = output.css.indexOf('html .c-input') >= 0;
      assert.equal(expects, true);
    });
  });

  describe('select.c-input', function() {
    var styles = `
      html {
        @import "components/input/select";
      }
    `;
    var output = barista({
      content: styles
    });

    it('should be properly scoped when @import within a selector', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.css.indexOf('html select.c-input') >= 0;
      assert.equal(expects, true);
    });
  });

  describe('textarea.c-input', function() {
    var styles = `
      html {
        @import "components/input/textarea";
      }
    `;
    var output = barista({
      content: styles
    });

    it('should be properly scoped when @import within a selector', function() {
      // Class structure should be
      // html textarea.c-input { ... }
      var expects = output.css.indexOf('html textarea.c-input') >= 0;
      assert.equal(expects, true);
    });
  });
});
