// Test :: Nav Tabs
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-nav: nav-tabs modifier', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style }).mount();

  it('should have a nav-tabs modifier', function() {
    var $o = output.$('.c-nav--tabs');

    assert.isOk($o.exists());
  });

  it('should have a bottom-border', function() {
    var $o = output.$('.c-nav--tabs');

    assert.isOk($o.getProp('border-bottom'));
  });

  describe('link', () => {
    it('should have correct inactive styles', () => {
      const el = output.find('.c-nav--tabs .c-nav__link');

      expect(el.prop('border-bottom-color')).to.equal('transparent');
      expect(el.prop('font-weight')).to.not.equal('700');
    });

    it('should have correct active styles', () => {
      const el = output.find('.c-nav--tabs .c-nav__link.is-active');

      expect(el.prop('border-bottom-color')).to.not.equal('transparent');
      expect(el.prop('font-weight')).to.equal('700');
    });
  });
});
