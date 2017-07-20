const barista = require('seed-barista');
const expect = require('chai').expect;

const output = barista({
  content: `@import "./_index"`
});

describe('seed-button: modifiers: link', () => {
  describe('focus', () => {
    const o = output.rule('.c-button--link:focus');

    it('should not have visible borders when focused', () => {
      expect(o.prop('border-color')).to.equal('transparent');
    });

    it('should not have visible borders when focused + state', () => {
      expect(output.rule('.c-button--link.is-error:focus').prop('border-color')).to.equal('transparent');
      expect(output.rule('.c-button--link.is-success:focus').prop('border-color')).to.equal('transparent');
      expect(output.rule('.c-button--link.is-warning:focus').prop('border-color')).to.equal('transparent');
    });

    it('should be underlined when focused', () => {
      expect(o.prop('text-decoration')).to.equal('underline');
    });
  });
});
