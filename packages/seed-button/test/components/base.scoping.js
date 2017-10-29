describe('base: scoping', () => {
  it('should be properly scoped when @import within a selector', () => {
    const content = `
      html {
        @import "./_index";
      }
    `;
    const styles = barista({ content });

    expect(styles.rule('html .c-button').exists()).to.be.true;
    expect(styles.rule('.c-button').exists()).to.be.false;
  });

  it('should have properly scoped button.c-button resets when @import within a selector', () => {
    const content = `
      html {
        @import "./_index";
      }
    `;
    const styles = barista({ content });

    expect(styles.rule('html button.c-button').exists()).to.be.true;
  });


  it('should be properly scoped when @import within a nested selector', () => {
    const content = `
      html body div ul {
        @import "./_index";
      }
    `;
    const styles = barista({ content });

    expect(styles.rule('html body div ul .c-button').exists()).to.be.true;
    expect(styles.rule('.c-button').exists()).to.be.false;
  });

});
