// Test :: Nav Hover
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: nav-hover modifier', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a nav-hover modifier', function() {
    var $o = output.$('.c-nav--hover .c-nav__link:hover');

    assert.isOk($o.exists());
  });

  it('should have no text-decoration', function() {
    var $o = output.$('.c-nav--hover .c-nav__link:hover');

    assert.equal($o.getProp('text-decoration'), 'none');
  });
});
