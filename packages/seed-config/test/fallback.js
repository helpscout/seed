describe('config: fallback', () => {
  it('should be able to set a default fallback', () => {
    const content = `
        @import "./_index";

        @include _config((
          Nightwish: (
            default: true,
            albums: (
              default: Dark Passion Play,
              live: (
                default: Vehicle of Spirit,
                "Showtime, Storytime": (
                  01: Dark Chest of Wonders,
                  02: Wish I Had an Angel,
                  03: TBD,
                ),
              )
            )
          )
        ));

        .n {
          content: _config(Nightwish);
        }
        .o {
          content: _config(Nightwish, albums, live);
        }
        .p {
          content: _config(Nightwish, albums);
        }
      `;
    const styles = barista({ content });

    expect(styles.rule('.n').prop('content')).to.equal('true');
    expect(styles.rule('.o').prop('content')).to.equal('Vehicle of Spirit');
    expect(styles.rule('.p').prop('content')).to.equal('Dark Passion Play');
  });
});
