const styles = barista({
  content: `@import "./_index"`,
});

describe('states: selected', () => {
  const s = styles.rule('.c-button.is-selected');

  it('should be defined', () => {
    expect(s.exists()).to.be.true;
  });

  it('should have hover styles', () => {
    const r = styles.rule('.c-button.is-selected:hover');

    expect(r.exists()).to.be.true;
  });

  it('should have :active styles', () => {
    const r = styles.rule('.c-button.is-selected:active');

    expect(r.exists()).to.be.true;
  });
});
