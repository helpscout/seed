// Test :: Build
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-breakpoints: build', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should build', function() {
    expect(output).to.exist;
  });

  it('should not export any rules', function() {
    expect(output.css.length).to.equal(0);
  });
});
