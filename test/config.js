describe('config', () => {
  describe('namespace', () => {
    const content = `
      $seed-button-namespace: "milk-vic-pj-nat-bli-button";
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the className of the all seed-button classes', () => {
      expect(styles.rule('.milk-vic-pj-nat-bli-button').exists()).to.be.true;
    });

    it('should no longer use default seed-button classes', () => {
      expect(styles.rule('.c-button').exists()).to.be.false;
    });
  });

  describe('primary-namespace', () => {
    const content = `
      $seed-button-primary-namespace: "main";
      @import "_index";
    `;
    const styles = barista({ content });

    it('should update the primary className', () => {
      expect(styles.rule('.c-button--main').exists()).to.be.true;
    });
  });

  describe('link-namespace', () => {
    const content = `
      $seed-button-link-namespace: "zelda";
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the link className', () => {
      expect(styles.rule('.c-button--zelda').exists()).to.be.true;
    });
  });

  describe('selected-namespace', () => {
    const content = `
      $seed-button-selected-namespace: "is-pressed";
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the selected className', () => {
      expect(styles.rule('.c-button.is-pressed').exists()).to.be.true;
    });
  });

  describe('border-radius', () => {
    const content = `
      $seed-button-border-radius: 50%;
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the border-radius', () => {
      const o = styles.rule('.c-button');

      expect(o.prop('border-radius')).to.equal('50%');
    });
  });

  describe('font-size', () => {
    const content = `
      $seed-button-font-size: 92px;
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the font-size', () => {
      const o = styles.rule('.c-button');

      expect(o.prop('font-size')).to.equal('92px');
    });
  });

  describe('font-weight', () => {
    const content = `
      $seed-button-font-weight: bold;
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the font-weight', () => {
      const o = styles.rule('.c-button');

      expect(o.prop('font-weight')).to.equal('bold');
    });
  });

  describe('height', () => {
    const content = `
      $seed-button-height: 100px;
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the height', () => {
      const o = styles.rule('.c-button');

      expect(o.prop('height')).to.equal('100px');
    });
  });

  describe('line-height', () => {
    const content = `
      $seed-button-line-height: 100px;
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the line-height', () => {
      const o = styles.rule('.c-button');

      expect(o.prop('line-height')).to.equal('100px');
    });
  });

  describe('padding', () => {
    const content = `
      $seed-button-padding: 0 10em;
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should update the padding', () => {
      const o = styles.rule('.c-button');

      expect(o.prop('padding')).to.equal('0 10em');
    });
  });

  describe('button-styles', () => {
    const content = `
      @import "pack/seed-dash/_index";
      @import "./config";
      $seed-button-styles: _extend($seed-button-styles, (
        potato-hani: (
          _generate-states: false,
          background: (
            default: hotpink,
            hover: hotpink,
            active: hotpink
          ),
          border: (
            default: hotpink,
            hover: hotpink,
            active: hotpink,
            focus: #237AB3
          ),
          box-shadow: (
            default: hotpink,
            hover: hotpink,
            active: hotpink,
            focus: none
          ),
          text: (
            default: #3197D6,
            hover: #3197D6
          ),
          text-decoration: (
            default: none,
            hover: underline,
          ),
        ),
      ));
      @import "./_index";
    `;
    const styles = barista({ content });

    it('should generate additional custom button style', () => {
      const o = styles.rule('.c-button--potato-hani');

      expect(o.exists()).to.be.true;
      expect(o.prop('background-color')).to.equal('hotpink');
      expect(o.prop('border-color')).to.equal('hotpink');
      expect(o.prop('box-shadow')).to.equal('hotpink');
    });

    it('should not be affected by state style', () => {
      const o = styles.rule('.c-button--potato-hani.is-error');

      expect(o.exists()).to.be.false;
    });
  });
});
