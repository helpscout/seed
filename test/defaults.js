describe('config: defaults', () => {
  describe('set', () => {
    it('should be able to set simple default', () => {
      const content = `
          @import "./_index";

          @include _config((
            "In Flames": true
          ), default);

          @include _config((
            "In Flames": false,
          ), default);

          .o {
            content: _config("In Flames");
          }
        `;
      const styles = barista({ content });

      expect(styles.rule('.o').prop('content')).to.equal('true');
    });

    it('should not be able to set default values on existing keys', () => {
      const content = `
          @import "./_index";

          @include _config((
            "In Flames": true
          ));

          @include _config((
            "In Flames": false,
          ), default);

          .o {
            content: _config("In Flames");
          }
        `;
      const styles = barista({ content });

      expect(styles.rule('.o').prop('content')).to.equal('true');
    });
  });

  describe('override', () => {
    it('should be able to override matched key/value structuring', () => {
      const content = `
          @import "./_index";

          @include _config((
            "In Flames": (
              2016: The Jester Race,
            )
          ), default);

          @include _config((
            "In Flames": (
              2016: Battles,
            )
          ));

          .o {
            content: _config("In Flames", 2016);
          }
        `;
      const styles = barista({ content });

      expect(styles.rule('.o').prop('content')).to.equal('Battles');
    });

    it('should be able to extend default values', () => {
      const content = `
        @import "./_index";

        @include _config((
          "In Flames": (
            2016: Battles,
          )
        ), default);

        @include _config((
          "In Flames": (
            1996: The Jester Race,
          )
        ));

        .o {
          content: _config("In Flames", 1996);
        }
      `;
      const styles = barista({ content });

      expect(styles.rule('.o').prop('content')).to.equal('The Jester Race');
    });

    it('should be able to override nested default values', () => {
      const content = `
        @import "./_index";

        @include _config((
          "In Flames": (
            2000: (
              Clayman: (
                01: Bullet Ride,
                02: TBD,
                03: Only for the Weak,
              )
            )
          )
        ), default);

        @include _config((
          "In Flames": (
            2000: (
              Clayman: (
                02: Pinball Map,
              )
            )
          )
        ));

        .one {
          content: _config("In Flames", 2000, Clayman, 01);
        }
        .two {
          content: _config("In Flames", 2000, Clayman, 02);
        }
        .three {
          content: _config("In Flames", 2000, Clayman, 03);
        }
      `;
      const styles = barista({ content });

      expect(styles.rule('.one').prop('content')).to.equal('Bullet Ride');
      expect(styles.rule('.two').prop('content')).to.equal('Pinball Map');
      expect(styles.rule('.three').prop('content')).to.equal('Only for the Weak');
    });

    it('should not be able to override non-default values with default', () => {
      const content = `
        @import "./_index";

        @include _config((
          "In Flames": (
            2000: (
              Clayman: (
                01: Bullet Ride,
                02: TBD,
                03: Only for the Weak,
              )
            )
          )
        ), default);

        @include _config((
          "In Flames": (
            2000: (
              Clayman: (
                02: Pinball Map,
              )
            )
          )
        ));

        @include _config((
          "In Flames": (
            2000: (
              Clayman: (
                01: TBD,
                02: TBD,
                03: TBD,
              )
            )
          )
        ), default);

        .one {
          content: _config("In Flames", 2000, Clayman, 01);
        }
        .two {
          content: _config("In Flames", 2000, Clayman, 02);
        }
        .three {
          content: _config("In Flames", 2000, Clayman, 03);
        }
      `;
      const styles = barista({ content });

      expect(styles.rule('.one').prop('content')).to.equal('Bullet Ride');
      expect(styles.rule('.two').prop('content')).to.equal('Pinball Map');
      expect(styles.rule('.three').prop('content')).to.equal('Only for the Weak');
    });

    it('should be able to add new default value if key is unique', () => {
      const content = `
        @import "./_index";

        @include _config((
          "InFlames": (
            1999: (
              Colony: (
                01: Embody the Invisible,
              )
            )
          )
        ));

        @include _config((
          "InFlames": (
            2000: (
              Clayman: (
                01: Bullet Ride,
                02: TBD,
                03: Only for the Weak,
              )
            ),
          )
        ), default);

        @include _config((
          "InFlames": (
            2000: (
              Clayman: (
                02: Pinball Map,
              )
            )
          )
        ));

        @include _config((
          "InFlames": (
            2000: (
              Clayman: (
                01: TBD,
                02: TBD,
                03: TBD,
                04: As the Future Repeats Today,
              )
            ),
            1996: (
              "The Jester Race": (
                01: Moonshield,
              )
            )
          )
        ), default);

        @include _config((
          "InFlames": (
            2000: (
              Clayman: (
                04: TBD,
              )
            )
          )
        ), default);

        .one {
          content: _config("InFlames", 2000, Clayman, 01);
        }
        .two {
          content: _config("InFlames", 2000, Clayman, 02);
        }
        .three {
          content: _config("InFlames", 2000, Clayman, 03);
        }
        .four {
          content: _config("InFlames", 2000, Clayman, 04);
        }
        .five {
          content: _config("InFlames", 1996, "The Jester Race", 01);
        }
        .six {
          content: _config("InFlames", 1999, "Colony", 01);
        }
      `;
      const styles = barista({ content });

      expect(styles.rule('.one').prop('content')).to.equal('Bullet Ride');
      expect(styles.rule('.two').prop('content')).to.equal('Pinball Map');
      expect(styles.rule('.three').prop('content')).to.equal('Only for the Weak');
      expect(styles.rule('.four').prop('content')).to.equal('As the Future Repeats Today');
      expect(styles.rule('.five').prop('content')).to.equal('Moonshield');
      expect(styles.rule('.six').prop('content')).to.equal('Embody the Invisible');

      // If you can beat this test (aka. BOSS)…
      console.log('\n      HEIR OF FIRE DESTROYED. 1,000,000 SOULS ACQUIRED.\n');

    });
  });
});
