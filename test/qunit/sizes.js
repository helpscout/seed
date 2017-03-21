// QUnit :: Test :: Sizes
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('modifier: sizes', {
  before: function() {
    this.$b = $('#button');
    this.props = {
      fontSize: this.$b.css('font-size'),
      height: this.$b.css('height'),
      lineHeight: this.$b.css('line-height'),
      padding: this.$b.css('padding'),
    };
    this.computed = {
      height: this.$b.height(),
      outerHeight: this.$b.outerHeight(),
    };
  },
}, function() {

  md('sm',
    {
      beforeEach: function() {
        this.className = 'c-button--sm';
        this.$b = $('#button');
        this.$b.addClass(this.className);
      },
      afterEach: function() {
        this.$b.removeClass(this.className);
      }
    },
    function() {
      t('should have a sm modifier class', function(assert) {
        assert.ok(this.computed.height !== this.$b.height(),
          'sm modifier class exist since outerHeight has been modified');
      });

      t('should modify the size-based properties', function(assert) {
        assert.ok(this.props.fontSize !== this.$b.css('font-size'),
          'font-size changes with sm modifier className');
        assert.ok(this.props.height !== this.$b.css('height'),
          'height changes with sm modifier className');
        assert.ok(this.props.lineHeight !== this.$b.css('line-height'),
          'line-height changes with sm modifier className');
        assert.ok(this.props.padding !== this.$b.css('padding'),
          'padding changes with sm modifier className');
      });
    }
  );

  md('md',
    {
      beforeEach: function() {
        this.className = 'c-button--md';
        this.$b = $('#button');
        this.$b.addClass(this.className);
      },
      afterEach: function() {
        this.$b.removeClass(this.className);
      }
    },
    function() {
      t('should have a md modifier class', function(assert) {
        assert.ok(this.computed.height === $('#button').height(),
          'md modifier class exist since outerHeight has been modified');
      });

      t('should modify the size-based properties', function(assert) {
        assert.ok(this.props.fontSize === this.$b.css('font-size'),
          'font-size is the same with modifier className');
        assert.ok(this.props.height === this.$b.css('height'),
          'height is the same with md modifier className');
        assert.ok(this.props.lineHeight === this.$b.css('line-height'),
          'line-height is the same with md modifier className');
        assert.ok(this.props.padding === this.$b.css('padding'),
          'padding is the same with md modifier className');
      });
    }
  );

  md('lg',
    {
      beforeEach: function() {
        this.className = 'c-button--lg';
        this.$b = $('#button');
        this.$b.addClass(this.className);
      },
      afterEach: function() {
        this.$b.removeClass(this.className);
      }
    },
    function() {
      t('should have a lg modifier class', function(assert) {
        assert.ok(this.computed.height !== this.$b.height(),
          'lg modifier class exist since outerHeight has been modified');
      });

      t('should modify the size-based properties', function(assert) {
        assert.ok(this.props.fontSize !== this.$b.css('font-size'),
          'font-size changes with lg modifier className');
        assert.ok(this.props.height !== this.$b.css('height'),
          'height changes with lg modifier className');
        assert.ok(this.props.lineHeight !== this.$b.css('line-height'),
          'line-height changes with lg modifier className');
        assert.ok(this.props.padding !== this.$b.css('padding'),
          'padding changes with lg modifier className');
      });
    }
  );

});
