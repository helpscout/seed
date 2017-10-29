// Test :: Component :: Navbar Item
/* globals describe: true, it: true */
'use strict';

const barista = require('seed-barista');
const expect = require('chai').expect;

describe('seed-navbar: component: navbar-item', function() {
  describe('base', function() {
    const style = `
      @import "./_index";
    `;
    const output = barista({ content: style });
    const o = output.rule('.c-navbar__item');

    it('should have box-sizing reset', function() {
      expect(o.prop('box-sizing')).to.equal('border-box');
    });

    it('should have correct display property', function() {
      expect(o.prop('display')).to.equal('block');
    });
  });

  describe('modifiers', function() {
    const style = `
      @import "./_index";
    `;
    const output = barista({ content: style });

    it('should have correct left/right align modifiers', function() {
      const l = output.rule('.c-navbar__item--left');
      const r = output.rule('.c-navbar__item--right');

      expect(l.exists()).to.be.true;
      expect(l.prop('margin-right')).to.equal('auto');
      expect(r.exists()).to.be.true;
      expect(r.prop('margin-left')).to.equal('auto');
    });
  });
});
