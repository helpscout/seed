// Test :: Config
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-shadow: config', function() {

  describe('namespace', function() {
    var style = `
      $seed-shadow-namespace: "shade";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the className of the all seed-shadow classes', function() {
      var $o = output.$('.shade-0');

      assert.isOk($o.exists());
    });

    it('should no longer use default seed-shadow classes', function() {
      var $o = output.$('.t-shadow-0');

      assert.isNotOk($o.exists());
    });
  });

  describe('color', function() {
    var style = `
      $seed-shadow-color: red;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the shadow color', function() {
      var $o = output.$('.t-shadow-0');

      assert.equal($o.getProp('box-shadow'), '0 1px 1px rgba(255, 0, 0, 0)');
    });
  });

  describe('sizes', function() {
    var style = `
      $seed-shadow-sizes: (
        one: none,
      );
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the generated sizes', function() {
      var $o = output.$('.t-shadow-one');

      assert.isOk($o.exists());
    });

    it('should no longer use default seed-shadow classes', function() {
      var $o = output.$('.t-shadow-3');

      assert.isNotOk($o.exists());
    });
  });

});
