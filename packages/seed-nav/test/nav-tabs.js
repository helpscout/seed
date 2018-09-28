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

  it('should have responsive modifiers', () => {
    expect(output.rule('.c-nav--tabs@sm').at(['min']).exists()).to.be.true;
    expect(output.rule('.c-nav--tabs@md').at(['min']).exists()).to.be.true;
    expect(output.rule('.c-nav--tabs@lg').at(['min']).exists()).to.be.true;

    expect(output.rule('.c-nav--tabs@sm').at(['max'])).to.be.false;
    expect(output.rule('.c-nav--tabs@md').at(['max'])).to.be.false;
    expect(output.rule('.c-nav--tabs@lg').at(['max'])).to.be.false;
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
