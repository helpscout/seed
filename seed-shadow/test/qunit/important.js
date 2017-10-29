// QUnit :: Test :: Important
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('modifier: block', {
  before: function() {
    this.$b = $('#el');
    this.className = 't-shadow-0';
    this.$b.css('box-shadow', '5px 10px 20px red');
    this.b = {
      boxShadow: this.$b.css('box-shadow'),
    };
    this.$b.addClass(this.className);
    this.m = {
      boxShadow: this.$b.css('box-shadow'),
    };
  },
}, function() {

  t('should change pre-defined box-shadow', function(assert) {
    assert.ok(this.b.boxShadow !== this.m.boxShadow,
      'box-shadow is updated');
  });

});
