const css = require('./helper.styles');

describe('mixin: !default emulation', () => {
  // Hard test ahead…
  console.log('\n      Entering fog wall…\n');

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
    const styles = css(content);

    expect(styles.rule('.o').prop('color')).to.equal('bye');
  });

  it('should not be able to overwrite keys with the name "default", with default flag', () => {
    const content = `
      @import "./_index";

      // _color(blue, default) is already defined as !default

      @include _color((
        blue: (
          default: blue,
        )
      ), default);

      .b {
        color: _color(blue);
      }
    `
    const styles = css(content);

    expect(styles.rule('.b').prop('color')).to.not.equal('blue');
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
    const styles = css(content);
    
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
    const styles = css(content);

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
      const styles = css(content);

      expect(styles.rule('.o').prop('color')).to.equal('bye');
    });

    it('should be able to set defaults on multiple mixin args', () => {
      const content = `
        @import "./_index";

        $a: (newBlue: blue);
        $b: (newRed: red);

        @include _color($a, $b, default);

        // Re-import colors
        @import "./_index";

        .b {
          color: _color(newBlue);
        }
        .r {
          color: _color(newRed);
        }
      `
      const styles = css(content);

      expect(styles.rule('.b').prop('color')).to.equal('blue');
      expect(styles.rule('.r').prop('color')).to.equal('red');
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
      const styles = css(content);

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
      const styles = css(content);

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
      const styles = css(content);

      expect(styles.rule('.o').prop('color')).to.equal('GALAXY');
    });
  });

  it('should be able to extend deep defaults', () => {
    const content = `
      @import "./_index";

      @include _color((
        one: (
          two: (
            three: (
              default: red,
            )
          )
        )
      ), default);

      @include _color((
        one: (
          two: (
            three: (
              inception: blue,
            )
          )
        )
      ), default);

      .b {
        color: _color(one, two, three, inception);
      }
    `
    const styles = css(content);

    expect(styles.rule('.b').prop('color')).to.equal('blue');
  });

  // If you can beat this test (aka. BOSS)…
  console.log('\n      HEIR OF FIRE DESTROYED. 1,500,000 SOULS ACQUIRED.\n');
});
