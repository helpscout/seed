// Test :: Styles
/* globals describe: true, it: true */
'use strict';
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: styles', function() {
  describe('box-sizing', function() {
    var styles = `
      html {
        @import "components/input/_index";
      }
    `;
    var output = barista({
      content: styles
    });
    var $o = output.$('html .c-input');

    it('should have box-sizing: border-box reset', function() {
      assert.equal($o.getProp('box-sizing'), 'border-box');
    });
  });
});
