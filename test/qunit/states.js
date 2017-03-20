// QUnit :: Test :: States
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('states', {
  before: function() {
    this.$b = $('#button');
    this.props = {
      backgroundColor: this.$b.css('background-color'),
      borderColor: this.$b.css('border-color'),
      color: this.$b.css('color'),
    };
  },
}, function() {

  md('error',
    {
      beforeEach: function() {
        this.$b.removeClass('is-error');
      },
    },
    function() {
      t('should have an error state class', function(assert) {
        var className = 'is-error';

        this.$b.addClass(className);

        assert.ok(this.props.backgroundColor !== this.$b.css('border-color'),
          'error class exist since border-color has been modified');
      });

      t('should appear differently with error state class', function(assert) {
        var className = 'is-error';

        this.$b.addClass(className);

        assert.ok(this.props.backgroundColor !== this.$b.css('background-color'),
          'background-color changes with error state className');
        assert.ok(this.props.borderColor !== this.$b.css('border-color'),
          'border-color changes with error state className');
        assert.ok(this.props.color !== this.$b.css('color'),
          'color changes with error state className');
      });
    }
  );

  md('success',
    {
      beforeEach: function() {
        this.$b.removeClass('is-success');
      },
    },
    function() {
      t('should have an success state class', function(assert) {
        var className = 'is-success';

        this.$b.addClass(className);

        assert.ok(this.props.backgroundColor !== this.$b.css('border-color'),
          'success class exist since border-color has been modified');
      });

      t('should appear differently with success state class', function(assert) {
        var className = 'is-success';

        this.$b.addClass(className);

        assert.ok(this.props.backgroundColor !== this.$b.css('background-color'),
          'background-color changes with success state className');
        assert.ok(this.props.borderColor !== this.$b.css('border-color'),
          'border-color changes with success state className');
        assert.ok(this.props.color !== this.$b.css('color'),
          'color changes with success state className');
      });
    }
  );

  md('warning',
    {
      beforeEach: function() {
        this.$b.removeClass('is-warning');
      },
    },
    function() {
      t('should have an warning state class', function(assert) {
        var className = 'is-warning';

        this.$b.addClass(className);

        assert.ok(this.props.backgroundColor !== this.$b.css('border-color'),
          'warning class exist since border-color has been modified');
      });

      t('should appear differently with warning state class', function(assert) {
        var className = 'is-warning';

        this.$b.addClass(className);

        assert.ok(this.props.backgroundColor !== this.$b.css('background-color'),
          'background-color changes with warning state className');
        assert.ok(this.props.borderColor !== this.$b.css('border-color'),
          'border-color changes with warning state className');
        assert.ok(this.props.color !== this.$b.css('color'),
          'color changes with warning state className');
      });
    }
  );
});

