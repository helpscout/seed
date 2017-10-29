describe('config: set', () => {
  it('should be able to set a config', () => {
    const content = `
        @import "./_index";

        @include _config((
          nightwish: (
            showtime: storytime,
          )
        ));

        .o {
          content: _config(nightwish, showtime);
        }
      `;
    const styles = barista({ content });

    expect(styles.rule('.o').prop('content')).to.equal('storytime');
  });

  it('should be able to set a deep config', () => {
    const content = `
        @import "./_index";

        @include _config((
          Nightwish: (
            "Showtime, Storytime": (
              01: Dark Chest of Wonders,
              02: Wish I Had an Angel,
              03: She is My Sin,
              04: Ghost River,
            ),
          )
        ));

        .o {
          content: _config(Nightwish, "Showtime, Storytime", 01);
        }
      `;
    const styles = barista({ content });

    expect(styles.rule('.o').prop('content')).to.equal('Dark Chest of Wonders');
  });

  it('should be able to set multiple keys', () => {
    const content = `
      @import "./_index";

      $a: (
        Nightwish: (
          2013: "Showtime, Storytime",
        )
      );

      $b: (
        "In Flames": (
          2016: "Battles",
        )
      );

      @include _config($a, $b);

      .a {
        content: _config(Nightwish, 2013);
      }
      .b {
        content: _config("In Flames", 2016);
      }
    `;
    const styles = barista({ content });

    expect(styles.rule('.a').prop('content')).to.equal('"Showtime, Storytime"');
    expect(styles.rule('.b').prop('content')).to.equal('"Battles"');
  });
});
