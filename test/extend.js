describe('config: extend', () => {
  it('should be able to extend a config', () => {
    const content = `
        @import "./_index";

        @include _config((
          Nightwish: (
            2013: "Showtime, Storytime",
          )
        ));

        @include _config((
          Nightwish: (
            2011: "Imaginaerum",
          )
        ));

        .o {
          content: _config(Nightwish, 2013);
        }
        .p {
          content: _config(Nightwish, 2011);
        }
      `;
    const styles = barista({ content });

    expect(styles.rule('.o').prop('content')).to.equal('"Showtime, Storytime"');
    expect(styles.rule('.p').prop('content')).to.equal('"Imaginaerum"');
  });

  it('should be able to set a deep config', () => {
    const content = `
        @import "./_index";

        @include _config((
          Nightwish: (
            albums: (
              live: (
                "Showtime, Storytime": (
                  01: Dark Chest of Wonders,
                  02: Wish I Had an Angel,
                  03: TBD,
                ),
              )
            )
          )
        ));

        @include _config((
          Nightwish: (
            albums: (
              live: (
                "Showtime, Storytime": (
                  03: She is My Sin,
                  04: Ghost River,
                ),
              ),
              studio: (
                "Imaginaerum": (
                  01: Taikatalvi,
                ),
              ),
            )
          )
        ));


        .n {
          content: _config(Nightwish, albums, live, "Showtime, Storytime", 01);
        }
        .o {
          content: _config(Nightwish, albums, live, "Showtime, Storytime", 03);
        }
        .p {
          content: _config(Nightwish, albums, live, "Showtime, Storytime", 04);
        }
        .q {
          content: _config(Nightwish, albums, studio, "Imaginaerum", 01);
        }
      `;
    const styles = barista({ content });

    // Original map
    expect(styles.rule('.n').prop('content')).to.equal('Dark Chest of Wonders');
    // Overwritten value
    expect(styles.rule('.o').prop('content')).to.equal('She is My Sin');
    // New extended value in existing map
    expect(styles.rule('.p').prop('content')).to.equal('Ghost River');
    // New map
    expect(styles.rule('.q').prop('content')).to.equal('Taikatalvi');
  });
});
