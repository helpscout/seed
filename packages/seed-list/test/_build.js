// Test :: Build
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-list: config', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should build', function() {
    var $o = output.$('.c-list');

    assert.isOk($o.selectors.length);
  });
});
