// QUnit :: Test :: Block
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('modifier: block', {
  before: function() {
    this.$b = $('#button');
    this.className = 'c-button--block';
    this.b = {
      display: this.$b.css('display'),
      width: this.$b.width(),
    };
    this.$b.addClass(this.className);
    this.m = {
      display: this.$b.css('display'),
      width: this.$b.width(),
    };
  },
}, function() {

  t('should change width when primary modifier', function(assert) {
    assert.ok(this.b.display !== this.m.display,
      'display is updated');
    assert.ok(this.b.width !== this.m.width,
      'width is updated');
  });

});
