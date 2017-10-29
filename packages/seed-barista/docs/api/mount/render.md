# .render()

Generate DOM elements to Barista's virtual DOM by specifying selectors.

All previous elements are removed ebfore the newly generated elements are added.


#### .render(selectors)

| Argument | Type | Description |
| --- | --- | --- |
| selector | string | Selectors to generate and append into Barista's virtual DOM |


#### Requirements

Your `BaristaOutput` instance must first be mounted with `.mount()`.


#### Returns

`BaristaOutput`: The initial `output` instance.



## Examples

`.render()` provides a quick way to add virtual DOM elements. To test it the element's styles, you'll need to use [`.prop()`](/prop.md), which is an alias for jQuery's handy `.css()` method.

```js
var output = barista({ ... }).mount();

// Adding the element(s)
output.render('div.kip span.cage-fighter');
// Getting the selector
var span = output.dom.$('div.kip span.cage-fighter');

// Testing the selector's CSS
expect(span.prop('color')).to.equal('red');
expect(span.prop('display')).to.equal('inline-block');
expect(span.prop('position')).to.equal('relative');
```



## Details

```js
var output = barista({ ... }).mount();
output.render('div.kip span.cage-fighter');
```

The above example will generate this markup, to be injected into the `body` of Barista's virtual DOM:
```html
<div class="kip">
  <span class="cage-fighter"></div>
</div>
```

Note: If you use this method again, it will remove your previous DOM elements.

```js
output.render('div.napolean span.sweet-jumps');
```

Barista's virtual DOM is now:

```html
<div class="napolean">
  <span class="sweet-jumps"></div>
</div>
```



## Related

For an advanced method to generate elements, check out [`.html()`](html.md).
