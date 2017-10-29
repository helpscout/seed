// Test :: Build
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: build', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should build', function() {
    expect(output.css).to.exist;
  });

  it('should build only once', function() {
    var style = `
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $c = output.$('.c-dot-nav');
    var $i = output.$('.c-dot-nav__item');
    var $l = output.$('.c-dot-nav__link');

    expect($c.selectors.length).to.equal(1);
    expect($i.selectors.length).to.equal(1);
    expect($l.selectors.length).to.equal(1);
  });
});
