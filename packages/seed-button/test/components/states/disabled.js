const styles = barista({
  content: `@import "./_index"`,
});

describe('states: disabled', () => {
  const o = styles.rule('.c-button');
  const d = styles.rule('.c-button[disabled]');

  it('should be defined', () => {
    const a = styles.rule('.c-button.is-disabled');
    const b = styles.rule('.c-button[disabled]');

    expect(a.exists()).to.be.true;
    expect(b.exists()).to.be.true;
  });

  it('should disable cursor', () => {
    expect(d.prop('cursor')).to.equal('not-allowed');
  });

  it('should reduce opacity', () => {
    expect(d.prop('opacity')).to.exist;
    expect(d.prop('opacity')).to.not.equal('1');
  });
});
