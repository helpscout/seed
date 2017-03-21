// QUnit :: Test :: Disabled
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('state: disabled', function() {

  md('native',
    {
      before: function() {
        this.$b = $('#button');
        this.b = {
          backgroundColor: this.$b.css('background-color'),
          color: this.$b.css('color'),
          cursor: this.$b.css('cursor'),
          opacity: this.$b.css('opacity'),
        };
        this.$b.prop('disabled', true);
        this.m = {
          backgroundColor: this.$b.css('background-color'),
          color: this.$b.css('color'),
          cursor: this.$b.css('cursor'),
          opacity: this.$b.css('opacity'),
        };
      },
      after: function() {
        this.$b.prop('disabled', false);
      },
    },
    function() {
      t('should change styles when button is natively disabled', function(assert) {
        assert.ok(this.b.cursor !== this.m.cursor,
          'cursor is updated');
        assert.ok(this.b.opacity !== this.m.opacity,
          'opacity is updated');
      });

      t('should not change styles on hover', function(assert) {
        var props = this.b;

        this.$b.mouseover(function() {
          var $el = $('#button');
          var bg = $el.css('background-color');
          var c = $el.css('color');

          assert.ok(props.backgroundColor === bg,
            'background-color is unmodified');
          assert.ok(props.color === c,
            'color is unmodified');
        });

        this.$b.trigger('mouseenter');
      });

    }
  );

  md('class',
    {
      before: function() {
        this.$b = $('#button');
        this.className = 'is-disabled';
        this.b = {
          backgroundColor: this.$b.css('background-color'),
          color: this.$b.css('color'),
          cursor: this.$b.css('cursor'),
          opacity: this.$b.css('opacity'),
        };
        this.$b.addClass(this.className);
        this.m = {
          backgroundColor: this.$b.css('background-color'),
          color: this.$b.css('color'),
          cursor: this.$b.css('cursor'),
          opacity: this.$b.css('opacity'),
        };
      },
      after: function() {
        this.$b.removeClass(this.className);
      },
    },
    function() {

      t('should change styles when button is natively disabled', function(assert) {
        assert.ok(this.b.cursor !== this.m.cursor,
          'cursor is updated');
        assert.ok(this.b.opacity !== this.m.opacity,
          'opacity is updated');
      });

      t('should not change styles on hover', function(assert) {
        var props = this.b;

        this.$b.mouseover(function() {
          var $el = $('#button');
          var bg = $el.css('background-color');
          var c = $el.css('color');

          assert.ok(props.backgroundColor === bg,
            'background-color is unmodified');
          assert.ok(props.color === c,
            'color is unmodified');
        });

        this.$b.trigger('mouseenter');
      });
    }
  );

});
