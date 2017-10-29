const styles = barista({
  content: `@import "./_index"`,
});

describe('styles: primary', () => {
  it('should be defined', () => {
    expect(styles.rule('.c-button--primary').exists()).to.be.true;
  });

  it('should alter the default appearance', () => {
    styles.mount();
    styles.append('.c-button');
    styles.append('.c-button--primary');

    const d = styles.dom.$('.c-button');
    const m = styles.dom.$('.c-button--primary');

    expect(d.prop('background')).to.not.equal(m.prop('background'));
    expect(d.prop('border-color')).to.not.equal(m.prop('border-color'));
    expect(d.prop('color')).to.not.equal(m.prop('color'));
  });

  describe('states', () => {
    const d = styles.rule('.c-button--primary');

    it('should have a :hover state', () => {
      const s = styles.rule('.c-button--primary:hover');

      expect(s.exists()).to.be.true;
      expect(d.prop('background-color')).to.not.equal(s.prop('background-color'));
    });

    it('should have a :active state', () => {
      const s = styles.rule('.c-button--primary:active');

      expect(s.exists()).to.be.true;
      expect(d.prop('background-color')).to.not.equal(s.prop('background-color'));
    });

    it('should have a :focus state', () => {
      const s = styles.rule('.c-button--primary:focus');

      expect(s.exists()).to.be.true;
      expect(d.prop('background-color')).to.not.equal(s.prop('background-color'));
    });

    it('should have a :focus:active state', () => {
      const s = styles.rule('.c-button--primary:focus:active');

      expect(s.exists()).to.be.true;
    });
  });
});
