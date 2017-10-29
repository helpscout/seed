const toNumber = require('../../utils').toNumber;

const styles = barista({
  content: `@import "./_index"`,
});

const sizeTestHelper = (size) => {
  describe(size, () => {
    const og = styles.rule('.c-button');
    const o = styles.rule(`.c-button--${size}`);

    it('should be defined', () => {
      expect(o.exists()).to.be.true;
    });

    // md is default
    if (size !== 'md') {
      it('should modify the height', () => {
        expect(toNumber(o.prop('height'))).to.not.equal(toNumber(og.prop('height')));
      });

      it('should modify the line-height', () => {
        expect(toNumber(o.prop('line-height'))).to.not.equal(toNumber(og.prop('line-height')));
      });
    }
  });
};

describe('sizes', () => {
  sizeTestHelper('sm');
  sizeTestHelper('md');
  sizeTestHelper('lg');

  describe('integration', () => {
    styles.mount();

    it('should adjust sizing when applied', () => {
      const $b = styles.find('button.c-button');
      const h = $b.prop('height');

      // Testing SM
      $b.addClass('c-button--sm');
      expect(h).to.not.equal($b.prop('height'));
      $b.removeClass('c-button--sm');

      // Testing LG
      $b.addClass('c-button--lg');
      expect(h).to.not.equal($b.prop('height'));
    });
  });
});
