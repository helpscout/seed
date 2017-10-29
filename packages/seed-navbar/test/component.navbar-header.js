// Test :: Component :: Navbar Header
/* globals describe: true, it: true */
'use strict';

const barista = require('seed-barista');
const expect = require('chai').expect;

describe('seed-navbar: component: navbar-header', function() {
  describe('base', function() {
    const style = `
      @import "./_index";
    `;
    const output = barista({ content: style });
    const o = output.rule('.c-navbar__header');

    it('should have box-sizing reset', function() {
      expect(o.prop('box-sizing')).to.equal('border-box');
    });

    it('should have correct flex properties', function() {
      expect(o.prop('align-items')).to.equal('center');
      expect(o.prop('display')).to.equal('flex');
      expect(o.prop('flex-direction')).to.equal('row');
      expect(o.prop('flex-wrap')).to.equal('nowrap');
      expect(o.prop('justify-content')).to.equal('flex-start');
    });

    it('should have position of relative', function() {
      expect(o.prop('position')).to.equal('relative');
    });

    it('should have a min-height defined', function() {
      expect(parseInt(o.prop('min-height'), 10)).to.be.above(0);
    });
  });
});
