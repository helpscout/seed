// Test :: Component :: Navbar Collapse
/* globals describe: true, it: true */
'use strict';

const barista = require('seed-barista');
const expect = require('chai').expect;

describe('seed-navbar: component: collapse', function() {
  describe('base', function() {
    const style = `
      @import "./_index";
    `;
    const output = barista({ content: style });
    const o = output.rule('.c-navbar__item.collapse');

    it('should not style default Bootstrap collapse rules', function() {
      expect(output.rule('.collapse').exists()).to.be.false;
      expect(output.rule('.in').exists()).to.be.false;
      expect(output.rule('.collapse.in').exists()).to.be.false;
      expect(output.rule('.collapsing').exists()).to.be.false;
    });

    it('should have box-sizing reset', function() {
      expect(o.prop('box-sizing')).to.equal('border-box');
    });

    it('should be hidden by default', function() {
      expect(o.prop('display')).to.equal('none');
    });

    it('should be visible when triggered', function() {
      expect(
        output.rule('.c-navbar__item.collapse.in').prop('display')
      ).to.equal('block');
      expect(
        output.rule('.c-navbar__item.collapse.show').prop('display')
      ).to.equal('block');
    });

    it('should have collapsing animation class', function() {
      const o = output.rule('.c-navbar__item.collapsing');

      expect(o.exists()).to.be.true;
      expect(o.prop('height')).to.exist;
      expect(o.prop('transition-duration')).to.exist;
      expect(o.prop('transition-property')).to.exist;
    });
  });
});
