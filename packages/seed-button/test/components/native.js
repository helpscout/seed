const styles = barista({
  content: `@import "./_index"`,
});

describe('native', () => {
  const o = styles.rule('button.c-button');

  it('should have an inherit font-family', () => {
    expect(o.prop('font-family')).to.equal('inherit');
  });

  it('should not have an outline', () => {
    const focused = styles.rule('button.c-button:focus');

    expect(o.prop('outline')).to.equal('none');
    expect(focused.prop('outline')).to.equal('none');
  });
});
