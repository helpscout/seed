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
      var $o = output.$('html .c-input');

      assert.isOk($o.exosts());
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
      var $o = output.$('html select.c-input');

      assert.isOk($o.exists());
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
      var $o = output.$('html textarea.c-input');

      assert.isOk($o.exists());
    });
  });
});
