// Test :: Build
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-prop: build', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should build', function() {
    assert.isOk(output);
  });

  it('should have no CSS output', function() {
    assert.isNotOk(output.css);
  });
});
