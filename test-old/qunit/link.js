// QUnit :: Test :: Link
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('modifier: link', {
  before: function() {
    this.$b = $('#button');
    this.className = 'c-button--link';
    this.b = {
      backgroundColor: this.$b.css('background-color'),
      borderColor: this.$b.css('border-color'),
      color: this.$b.css('color'),
    };
    this.$b.addClass(this.className);
    this.m = {
      backgroundColor: this.$b.css('background-color'),
      borderColor: this.$b.css('border-color'),
      color: this.$b.css('color'),
    };
  },
}, function() {

  t('should change styles when link modifier is applied', function(assert) {
    assert.ok(this.b.backgroundColor !== this.m.backgroundColor,
      'background-color is updated');
    assert.ok(this.b.borderColor !== this.m.borderColor,
      'border-color is updated');
    assert.ok(this.b.color !== this.m.color,
      'color is updated');
  });

  md('state: error',
    {
      beforeEach: function() {
        this.stateClassName = 'is-error';
        this.$b.addClass(this.stateClassName);
        this.s = {
          backgroundColor: this.$b.css('background-color'),
          borderColor: this.$b.css('border-color'),
        };
      },
      afterEach: function() {
        this.$b.removeClass(this.stateClassName);
      },
    },
    function() {
      t('should change styles when error state is applied', function(assert) {
        assert.ok(this.s.backgroundColor === this.m.backgroundColor,
          'background-color is unmodified');
        assert.ok(this.s.borderColor === this.m.borderColor,
          'border-color is unmodified');
      });
    }
  );

  md('state: success',
    {
      beforeEach: function() {
        this.stateClassName = 'is-success';
        this.$b.addClass(this.stateClassName);
        this.s = {
          backgroundColor: this.$b.css('background-color'),
          borderColor: this.$b.css('border-color'),
        };
      },
      afterEach: function() {
        this.$b.removeClass(this.stateClassName);
      },
    },
    function() {
      t('should change styles when ereor state is applied', function(assert) {
        assert.ok(this.s.backgroundColor === this.m.backgroundColor,
          'background-color is unmodified');
        assert.ok(this.s.borderColor === this.m.borderColor,
          'border-color is unmodified');
      });
    }
  );

  md('state: warning',
    {
      beforeEach: function() {
        this.stateClassName = 'is-warning';
        this.$b.addClass(this.stateClassName);
        this.s = {
          backgroundColor: this.$b.css('background-color'),
          borderColor: this.$b.css('border-color'),
        };
      },
      afterEach: function() {
        this.$b.removeClass(this.stateClassName);
      },
    },
    function() {
      t('should change styles when ereor state is applied', function(assert) {
        assert.ok(this.s.backgroundColor === this.m.backgroundColor,
          'background-color is unmodified');
        assert.ok(this.s.borderColor === this.m.borderColor,
          'border-color is unmodified');
      });
    }
  );
});
