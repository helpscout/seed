// Test :: Nav Item
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: nav-item component', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a box-sizing reset', function() {
    var $o = output.$('.c-nav__item');

    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

  it('should have alignment modifiers', function() {
    var $l = output.$('.c-nav__item--left');
    assert.isOk($l.exists());

    var $r = output.$('.c-nav__item--right');
    assert.isOk($r.exists());
  });

  it('should include an active state', function() {
    var $o = output.$('.c-nav__item.is-active > .c-nav__link');

    assert.isOk($o.exists());
  });

  it('should include a disabled state', function() {
    var $o = output.$('.c-nav__item.is-disabled > .c-nav__link');

    assert.isOk($o.exists());
  });
});
