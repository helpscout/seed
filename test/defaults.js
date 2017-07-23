describe('mixin: !default emulation', () => {
  it('should be able to set !default values', () => {
    const content = `
      @import "./_index";

      @include _color((
        AKMU: (
          re: bye,
        ),
      ), default);

      .o {
        color: _color(AKMU, re);
      }
    `
    const styles = barista({ content });

    expect(styles.rule('.o').prop('color')).to.equal('bye');
  });

  it('should be able to override default color values', () => {
    const content = `
      @import "./_index";

      @include _color((
        blue: (
          500: red,
        ),
      ));

      .o {
        color: _color(blue, 500);
      }
    `
    const styles = barista({ content });

    expect(styles.rule('.o').prop('color')).to.equal('red');
  });

  it('should not override colors if !default is passed as the last arg', () => {
    const content = `
      @import "./_index";

      @include _color((
        blue: (
          500: red,
        ),
      ), default);

      .o {
        color: _color(blue, 500);
      }
    `
    const styles = barista({ content });

    expect(styles.rule('.o').prop('color')).to.not.equal('red');
  });

  describe('custom values', () => {
    it('should not be able to override custom !default values', () => {
      const content = `
        @import "./_index";

        @include _color((
          AKMU: (
            re: bye,
          ),
        ), default);

        // Re-import colors
        @import "./_index";

        @include _color((
          AKMU: (
            re: DINOSAUR,
          ),
        ), default);

        .o {
          color: _color(AKMU, re);
        }
      `
      const styles = barista({ content });

      expect(styles.rule('.o').prop('color')).to.equal('bye');
    });

    it('should be able to override default values', () => {
      const content = `
        @import "./_index";

        @include _color((
          AKMU: (
            re: bye,
          ),
        ), default);

        // Re-import colors
        @import "./_index";

        @include _color((
          AKMU: (
            re: DINOSAUR,
          ),
        ));

        .o {
          color: _color(AKMU, re);
        }
      `
      const styles = barista({ content });

      expect(styles.rule('.o').prop('color')).to.equal('DINOSAUR');
    });

    it('should be not able to override an override with default values', () => {
      const content = `
        @import "./_index";

        @include _color((
          AKMU: (
            re: bye,
          ),
        ), default);

        // Re-import colors
        @import "./_index";

        @include _color((
          AKMU: (
            re: DINOSAUR,
          ),
        ));

        @include _color((
          AKMU: (
            re: MELTED,
          ),
        ), default);

        .o {
          color: _color(AKMU, re);
        }
      `
      const styles = barista({ content });

      expect(styles.rule('.o').prop('color')).to.equal('DINOSAUR');
    });

    it('should be able to override an override', () => {
      const content = `
        @import "./_index";

        @include _color((
          AKMU: (
            re: bye,
          ),
        ), default);

        // Re-import colors
        @import "./_index";

        @include _color((
          AKMU: (
            re: DINOSAUR,
          ),
        ));

        @include _color((
          AKMU: (
            re: GALAXY,
          ),
        ));

        .o {
          color: _color(AKMU, re);
        }
      `
      const styles = barista({ content });

      expect(styles.rule('.o').prop('color')).to.equal('GALAXY');
    });
  });
});
