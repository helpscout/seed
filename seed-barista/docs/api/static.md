# Static

Barista's static testing method is useful for writing lower-level unit tests.

```javascript
var expect = require('chai').expect;
var barista = require('seed-barista');

describe('harry component styles', function() {
  it('should render a class of wizard + harry', function() {
    var output = barista({ file: '_wizard.scss' });
    var rule = output.rule('.your-a-wizard.harry');

    expect(rule.exists()).to.be.true;
    expect(rule.prop('background')).to.equal('red');
    expect(rule.prop('color')).to.equal('yellow');
  });
});
```


#### barista(options)

| Argument | Type | Description |
| --- | --- | --- |
| options | object | Options for Barista. |

**See a [full list of options](../options.md)**



## Static API

* **[`.at()`](rule/at.md)**
* **[`.exists()`](rule/exists.md)**
* **[`.hasProp()`](rule/hasProp.md)**
* **[`.mediaQuery()`](rule/mq.md)**
* **[`.prop()`](rule/prop.md)**
* **[`.props()`](rule/props.md)**
