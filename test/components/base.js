const toNumber = require('../utils').toNumber;

const styles = barista({
  content: `@import "./_index"`,
});

describe('base', () => {
  describe('normalization', () => {
    const o = styles.rule('.c-button');

    it('should be defined', () => {
      expect(o.exists()).to.be.true;
    });

    it('should have normalized box sizing', () => {
      expect(o.prop('box-sizing')).to.equal('border-box');
    });

    it('should have normalized appearance', () => {
      expect(o.prop('appearance')).to.equal('none');
    });

    it('should have a pointer cursor', () => {
      expect(o.prop('cursor')).to.equal('pointer');
    });

    it('should have user-select disabled (none)', () => {
      expect(o.prop('user-select')).to.equal('none');
    });

    it('should not have text-decoration', () => {
      expect(o.prop('text-decoration')).to.equal('none');
    });

    it('should have outline disabled', () => {
      expect(o.prop('outline')).to.equal('none');
    });
  });

  describe('styles', () => {
    styles.mount();
    const o = styles.rule('.c-button');
    const $o = styles.find('.c-button');

    it('should have a background', () => {
      expect($o.prop('background')).to.equal('rgb(255, 255, 255)');
    });

    it('should have border styles', () => {
      expect($o.prop('border')).to.contain('1px solid');
    });

    it('should have rounded borders', () => {
      expect($o.prop('border-radius')).to.equal('3px');
    });

    it('should have text color defined', () => {
      expect($o.prop('color')).to.exist;
    });

    it('should be displayed inline-block', () => {
      expect($o.prop('display')).to.equal('inline-block');
    });

    it('should not have margins', () => {
      expect($o.prop('margin')).to.be.empty;
    });

    it('should have correct padding', () => {
      const paddingTop = $o.prop('padding-top');
      const paddingRight = $o.prop('padding-right');
      const paddingBottom = $o.prop('padding-bottom');
      const paddingLeft = $o.prop('padding-left');

      expect(toNumber(paddingTop)).to.equal(0);
      expect(toNumber(paddingBottom)).to.equal(0);
      expect(toNumber(paddingLeft)).to.equal(toNumber(paddingRight));
    });

    it('should have vertical-align defined', () => {
      expect($o.prop('vertical-align')).to.equal('middle');
    });

    it('should have correct height defined', () => {
      const borderWidth = toNumber(o.prop('border-width'));
      const height = toNumber(o.prop('height'));
      const lineHeight = toNumber(o.prop('line-height'));

      expect((borderWidth * 2) + lineHeight).to.equal(height);
    });

    describe('text', () => {
      it('should have correct font-size', () => {
        expect($o.prop('font-size')).to.equal('1rem');
      });

      it('should have correct font-weight', () => {
        // JSDOM/jQuery converts "normal" -> "400"
        expect($o.prop('font-weight')).to.equal('400');
      });

      it('should be center aligned', () => {
        expect($o.prop('text-align')).to.equal('center');
      });
    });
  });

  describe('states', () => {
    describe('hover', () => {
      const o = styles.rule('.c-button');
      const s = styles.rule('.c-button:hover');

      it('should adjust the background-color', () => {
        expect(o.prop('background-color')).to.not.equal(s.prop('background-color'));
      });

      it('should not have text underline', () => {
        expect(o.prop('text-decoration')).to.equal('none');
      });
    });

    describe('active', () => {
      const o = styles.rule('.c-button');
      const s = styles.rule('.c-button:active');

      it('should adjust the background-color', () => {
        expect(o.prop('background-color')).to.not.equal(s.prop('background-color'));
      });

      it('should adjust the box-shadow', () => {
        expect(o.prop('box-shadow')).to.not.equal(s.prop('box-shadow'));
      });
    });

    describe('focus', () => {
      const o = styles.rule('.c-button');
      const s = styles.rule('.c-button:focus');

      it('should adjust the border-color', () => {
        expect(o.prop('border-color')).to.not.equal(s.prop('border-color'));
      });

      describe('active', () => {
        const sa = styles.rule('.c-button:focus:active');

        it('should adjust the box-shadow', () => {
          expect(s.prop('box-shadow')).to.not.equal(sa.prop('box-shadow'));
        });
      });
    });
  });
});
