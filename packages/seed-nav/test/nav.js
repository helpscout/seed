// Test :: Nav Link
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: nav component', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a box-sizing reset', function() {
    var $o = output.$('.c-nav');

    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

  it('should have alignment modifiers', function() {
    var $l = output.$('.c-nav--left');
    assert.equal($l.getProp('justify-content'), 'flex-start');

    var $c = output.$('.c-nav--center');
    assert.equal($c.getProp('justify-content'), 'center');

    var $r = output.$('.c-nav--right');
    assert.equal($r.getProp('justify-content'), 'flex-end');
  });

  it('should have orientation modifiers', function() {
    var $l = output.$('.c-nav--list');
    assert.equal($l.getProp('flex-direction'), 'row');

    var $s = output.$('.c-nav--stacked');
    assert.equal($s.getProp('flex-direction'), 'column');
  });

  it('should have sizing modifiers', function() {
    var $x = output.$('.c-nav--xs .c-nav__link');
    assert.isOk($x.exists());

    var $s = output.$('.c-nav--sm .c-nav__link');
    assert.isOk($s.exists());

    var $m = output.$('.c-nav--md .c-nav__link');
    assert.isOk($m.exists());
  });
});
