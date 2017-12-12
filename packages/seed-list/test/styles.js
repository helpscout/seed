// Test :: Styles
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-list: styles', function() {

  describe('box-sizing', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should have box-sizing: border-box reset', function() {
      var $o = output.$('.c-list');

      assert.equal($o.getProp('box-sizing'), 'border-box');
    });
  });

  describe('publish', function() {
    var style = `
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should only be compiled once', function() {
      var $o = output.$('.c-list');

      assert.equal($o.selectors.length, 1);
    });
  });
});
