describe('index', function() {
  const css = `
    @import "./_index";
    @import "./_index";
    @import "./_index";
    @import "./_index";
    @import "./_index";
  `;
  const styles = barista({ content: css });

  it('should only be compiled once', function() {
    expect(styles.rule('.c-button').selectors).to.have.lengthOf(1);
    expect(styles.rule('.c-button--primary').selectors).to.have.lengthOf(1);
    expect(styles.rule('.c-button--link').selectors).to.have.lengthOf(1);
  });
});
