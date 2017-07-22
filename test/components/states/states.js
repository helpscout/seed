const styles = barista({
  content: `@import "./_index"`,
});

// Test helper for all the states, to keep it DRY
const styleCheck = (state) => {
  it('should be defined', () => {
    expect(styles.rule(`.c-button.is-${state}`).exists()).to.be.true;
  });

  it('should look different compared to default state', () => {
    const dom = styles.mount();
    const $b = dom.find('button.c-button');
    const bg = $b.prop('background');

    // Apply state
    $b.addClass(`is-${state}`);
    const newBg = $b.prop('background');

    expect(bg).to.not.equal(newBg);
  });

  it('should have :hover styles', () => {
    expect(styles.rule(`.c-button.is-${state}:hover`).exists()).to.be.true;
  });

  it('should have :active styles', () => {
    expect(styles.rule(`.c-button.is-${state}:active`).exists()).to.be.true;
  });

  it('should have :focus styles', () => {
    expect(styles.rule(`.c-button.is-${state}:focus`).exists()).to.be.true;
  });

  it('should have disabled', () => {
    expect(styles.rule(`.c-button.is-${state}:disabled`).exists()).to.be.true;
    expect(styles.rule(`.c-button.is-${state}.is-disabled`).exists()).to.be.true;
  });
};

describe('states: states', () => {
  describe('error', () => {
    styleCheck('error');
  });

  describe('success', () => {
    styleCheck('success');
  });

  describe('warning', () => {
    styleCheck('warning');
  });
});
