// Test :: Build
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: config', function() {
  describe('namespace', function() {
    var style = `
      $seed-nav-namespace: ahh-nav;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the className of seed-nav classes', function() {
      var $o = output.$('.ahh-nav');

      assert.isOk($o.exists());
    });
  });
});
