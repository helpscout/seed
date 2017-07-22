// QUnit :: Test :: Native
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('native', {
  before: function() {
    this.$b = $('#button');
    this.$n = $('#native');
    this.b = {
      props: {
        height: this.$b.css('height'),
        lineHeight: this.$b.css('line-height'),
        padding: this.$b.css('padding'),
      },
    };
    this.n = {
      props: {
        height: this.$n.css('height'),
        lineHeight: this.$n.css('line-height'),
        padding: this.$n.css('padding'),
      },
    };
  },
}, function() {

  t('should not modify native HTML button unless class is applied', function(assert) {
    assert.ok(this.n.props.height !== this.b.props.height,
      'does not change height');
    assert.ok(this.n.props.lineHeight !== this.b.props.lineHeight,
      'does not change line-height');
    assert.ok(this.n.props.padding !== this.b.props.padding,
      'does not change padding');
  });

});
