const styles = barista({
  content: `@import "./_index"`,
});

describe('styles: link', () => {
  it('should be defined', () => {
    expect(styles.rule('.c-button--link').exists()).to.be.true;
  });

  it('should not have a visible background', () => {
    styles.mount();

    expect(styles.find('button.c-button--link').prop('background')).to.equal('transparent');
    expect(styles.find('.c-button--link').prop('border-color')).to.equal('transparent');
  });

  it('should alter the default appearance', () => {
    styles.mount();
    styles.append('.c-button');
    styles.append('.c-button--link');

    const d = styles.dom.$('.c-button');
    const m = styles.dom.$('.c-button--link');

    expect(d.prop('background')).to.not.equal(m.prop('background'));
    expect(d.prop('border-color')).to.not.equal(m.prop('border-color'));
    expect(d.prop('color')).to.not.equal(m.prop('color'));
  });

  describe('states', () => {
    const d = styles.rule('.c-button--link');

    it('should have a :hover state', () => {
      const s = styles.rule('.c-button--link:hover');

      expect(s.exists()).to.be.true;
      expect(s.prop('background-color')).to.equal('transparent');
      expect(s.prop('border-color')).to.equal('transparent');
    });

    it('should have a :active state', () => {
      const s = styles.rule('.c-button--link:active');

      expect(s.exists()).to.be.true;
      expect(s.prop('background-color')).to.equal('transparent');
      expect(s.prop('border-color')).to.equal('transparent');
    });

    it('should have a :focus state', () => {
      const s = styles.rule('.c-button--link:focus');

      expect(s.exists()).to.be.true;
      expect(s.prop('text-decoration')).to.equal('underline');
      expect(s.prop('border-color')).to.equal('transparent');
    });
  });
});
