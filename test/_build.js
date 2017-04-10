// Test :: Build
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-typography: build', function() {
  describe('build', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should build', function() {
      var $o = output.$('.tx-h1');

      assert.isOk($o.exists());
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
      var $o = output.$('.tx-h1');

      assert.equal($o.selectors.length, 1);
    });
  });
});
