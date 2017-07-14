// Test :: Component :: Navbar Toggle
/* globals describe: true, it: true */
'use strict';

const barista = require('seed-barista');
const expect = require('chai').expect;

describe('seed-navbar: component: navbar-toggle', function() {
  describe('base', function() {
    const style = `
      @import "./_index";
    `;
    const output = barista({ content: style });
    const o = output.rule('.c-navbar__toggle');

    it('should have box-sizing reset', function() {
      expect(o.prop('box-sizing')).to.equal('border-box');
    });

    it('should vertical center align child item(s)', function() {
      expect(o.prop('align-items')).to.equal('center');
      expect(o.prop('display')).to.equal('flex');
    });
  });
});
