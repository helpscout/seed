const packStyles = `
  // Require seed-config
  @import "./_index";

  @function _simplecolor($colors...) {
    @return _config(SEED_COLOR_PACK__GLOBAL, $colors...);
  }

  @mixin _simplecolor($colors...) {
    @include _config(SEED_COLOR_PACK__GLOBAL, $colors...);
  }

  // Base colors
  @include _simplecolor((
    blue: (
      500: purple,
    )
  ));
  
  @include _simplecolor((
    brand: (
      main: red,
      secondary: orangered,
    ),
  ));

  // Setting defaults
  @include _simplecolor((
    text: black,
    link: blue,
  ), default);

  // Adding new keys to existing maps
  @include _simplecolor((
    blue: (
      default: blue,
    )
  ), default);

  // Overwriting defaults (shouldn't work)
  @include _simplecolor((
    text: white
  ), default);

  // Overwriting defaults (should work)
  @include _simplecolor((
    link: orange,
  ));

  .blue {
    color: _simplecolor(blue);
  }

  .brand {
    color: _simplecolor(brand, main);
  }

  .text {
    color: _simplecolor(text);
  }

  .link {
    color: _simplecolor(link);
  }
`;

describe('mock: color-pack', () => {
  it('should be able to extend the _config mixin/function', () => {
    // Hard test ahead…
    console.log('\n      Entering fog wall…\n');

    const content = packStyles;
    const styles = barista({ content });

    const o = styles.rule('.blue');
    const n = styles.rule('.brand');
    const t = styles.rule('.text');
    const l = styles.rule('.link');

    expect(o.prop('color')).to.equal('blue');
    expect(n.prop('color')).to.equal('red');
    expect(t.prop('color')).to.equal('black');
    expect(l.prop('color')).to.equal('orange');

    // If you can beat this test (aka. BOSS)…
    console.log('\n      HEIR OF FIRE DESTROYED. 50,000 SOULS ACQUIRED.\n');
  });
});