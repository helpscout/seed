// Test :: Modifier :: Bullet
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-list: modifier: bullet', function() {

  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-list--bullet');

  it('should have a bullet modifier', function() {
    assert.isOk($o.exists());
  });

  it('should have the correct list-style-type', function() {
    assert.equal($o.getProp('list-style-type'), 'disc');
  });

  it('should have a left offset', function() {
    assert.equal($o.getProp('padding-left'), '16px');
  });

  it('should have li with display: list-item', function() {
    var $o = output.$('.c-list--bullet > li');
    assert.equal($o.getProp('display'), 'list-item');
  });

  it('should have .c-list__item with display: list-item', function() {
    var $o = output.$('.c-list--bullet > .c-list__item');
    assert.equal($o.getProp('display'), 'list-item');
  });
});
