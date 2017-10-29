// Test :: Modifier - Justify
/* globals describe: true, it: true */
'use strict';

const barista = require('seed-barista');
const expect = require('chai').expect;

describe('seed-flexy: modifier - justify', () => {
  describe('config', () => {
    it('should have a range of alignments', () => {
      const style = `
        @import "./_index";
      `;
      const output = barista({ content: style });
      const $l = output.rule('.o-flexy--just-left');
      const $c = output.rule('.o-flexy--just-center');
      const $r = output.rule('.o-flexy--just-right');

      expect($l.exists()).to.be.true;
      expect($c.exists()).to.be.true;
      expect($r.exists()).to.be.true;
    });

    it('should change modifier sizes with config update', () => {
      var style = `
        $seed-flexy-justify-alignment: (
          friendly: left,
          milk: center,
          ahh: right,
        );
        @import "./_index";
      `;
      const output = barista({ content: style });

      const $milk = output.rule('.o-flexy--just-milk');
      const $ahh = output.rule('.o-flexy--just-ahh');

      expect($milk.exists()).to.be.true;
      expect($ahh.exists()).to.be.true;
    });
  });

  describe('styles', () => {
    const style = `
      @import "./_index";
    `;
    const output = barista({ content: style }).mount();

    it('should not align left/right by default', function() {
      const $o = output.find('.o-flexy');

      expect($o.prop('justify-content')).to.equal('space-between');
    });

    it('should flex-align items to the left', function() {
      const $o = output.rule('.o-flexy--just-left');

      expect($o.prop('justify-content')).to.equal('flex-start');
    });

    it('should flex-align items to the ring', function() {
      const $o = output.rule('.o-flexy--just-right');

      expect($o.prop('justify-content')).to.equal('flex-end');
    });
  });
});
