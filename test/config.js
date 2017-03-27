// Test :: Config
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-flexy: config', function() {

  describe('alignment', function() {
    var style = `
      $seed-flexy-alignment: (
        start: flex-start,
      );
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should generate a custom modifier class if defined', function() {
      var $o = output.$('.o-flexy--start');

      assert.isOk($o.exists());
      assert.equal($o.getProp('align-items'), 'flex-start');
    });

    it('should remove default alignment classes', function() {
      var $o = output.$('.o-flexy--bottom');

      assert.isNotOk($o.exists());
    });
  });

  describe('namespace', function() {
    var style = `
      $seed-flexy-namespace: "flex";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should generate object with updated namespace', function() {
      var $o = output.$('.flex');

      assert.isOk($o.exists());
      assert.equal($o.getProp('display'), 'flex');
    });

    it('should remove default alignment classes', function() {
      var $o = output.$('.o-flexy--bottom');

      assert.isNotOk($o.exists());
    });
  });
});
