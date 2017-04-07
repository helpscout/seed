// Test :: Modifier - Gap
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-flexy: modifier - gap', function() {
  describe('config', function() {
    it('should have a range of sizes', function() {
      var style = `
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $sm = output.$('.o-flexy--gap-sm > *');
      var $md = output.$('.o-flexy--gap-sm > *');

      assert.isOk($sm.exists());
      assert.isOk($md.exists());
    });

    it('should change modifier sizes with config update', function() {
      var style = `
        $seed-flexy-gap-sizes: (
          friendly: 4px,
          milk: 7px,
          ahh: 28px,
        );
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $milk = output.$('.o-flexy--gap-milk > *');
      var $ahh = output.$('.o-flexy--gap-ahh > *');

      assert.isOk($milk.exists());
      assert.isOk($ahh.exists());
    });
  });

  describe('styles', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $sm = output.$('.o-flexy--gap-sm > *');

    it('should nullify gap for last item', function() {
      var $o = output.$('.o-flexy--gap-sm > *:first-child');

      assert.isOk($o.exists());
      assert.equal($o.getProp('margin-left'), 0);
    });

    it('should have different gaps for default size range', function() {
      var output = barista({ content: style });
      var $md = output.$('.o-flexy--gap-md > *');

      assert.notEqual($sm.getProp('margin-left'), $md.getProp('margin-left'));
    });
  });
});
