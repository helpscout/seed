// Test :: Styles
/* globals describe: true, it: true */
'use strict';
var assert = require('chai').assert;
var barista = require('seed-barista');
var some = require('lodash.some');

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
    var selector = output.data.stylesheet.rules[0];

    it('should have box-sizing: border-box reset', function() {
      assert(some(selector.declarations, {
        property: 'box-sizing',
        value: 'border-box',
      }));
    });
  });
});
