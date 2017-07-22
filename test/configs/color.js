describe('color', () => {
  it('should modify base styles with _color() change', () => {
    const color = 'red';
    const content = `
      @import "pack/seed-color-scheme/_index";

      @include _color((
        button: (
          default: (
            background: (
              default: ${color},
            ),
            border: (
              default: ${color},
            ),
            text: (
              default: ${color},
            ),
          ),
        ),
      ));
      @import "./_index";
    `;
    const styles = barista({ content });
    const o = styles.rule('.c-button');

    expect(o.prop('background-color')).to.equal(color);
    expect(o.prop('border-color')).to.equal(color);
    expect(o.prop('color')).to.equal(color);
  });
});
