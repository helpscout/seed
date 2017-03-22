// Test :: Modifiers
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-control-group: modifiers', function() {

  describe('block', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should have the block modifier', function() {
      var $o = output.$('.o-control-group--block > *');

      assert.isOk($o.selectors.length);
    });
  });

  describe('left', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should have the alignment modifier', function() {
      var $o = output.$('.o-control-group--left');

      assert.isOk($o.selectors.length);
      assert.equal($o.getProp('justify-content'), 'flex-start');
    });
  });

  describe('center', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should have the alignment modifier', function() {
      var $o = output.$('.o-control-group--center');

      assert.isOk($o.selectors.length);
      assert.equal($o.getProp('justify-content'), 'center');
    });
  });

  describe('right', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should have the alignment modifier', function() {
      var $o = output.$('.o-control-group--right');

      assert.isOk($o.selectors.length);
      assert.equal($o.getProp('justify-content'), 'flex-end');
    });
  });

});
