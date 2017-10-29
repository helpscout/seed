// Test :: Build
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: build', function() {
  it('should build', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    assert.isOk(output);
    assert.isOk(output.css.length);
  });

  it('should output only once', function() {
    var style = `
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $o = output.$('.c-input');

    assert.equal($o.selectors.length, 1);
  });
});
